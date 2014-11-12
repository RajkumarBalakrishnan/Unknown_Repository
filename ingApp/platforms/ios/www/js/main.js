/*** author: @anotherwebstorm */
/**
 *  -> Defining our libraries and initializing our app
 */

require.config({
	paths : {
		// Major libraries
		jquery : 'libs/jquery/jquery-2.1.1',
		jquerymobile : 'libs/jquery_mobile/jquery.mobile-1.4.3',
		jquerymobileconfig : 'libs/jquery_mobile/jquerymobile.config',
		underscore : 'libs/underscore/underscore-min',
		backbone : 'libs/backbone/backbone-min',
		// Handle Clean Up Views libraries

		// Templating
		Handlebars : 'libs/handlebars/handlebars-min',

		// iscroll
		//iscroll : "libs/iscroll/iscroll-5.0.4",
		iscrollProbe : "libs/iscroll/iscroll-probe",

		// chart
		highcharts : 'libs/highchart/highcharts',
		exporting : 'libs/highchart/exporting',
		highchartsmore : 'libs/highchart/highcharts-more',
		//fastclick 
		fastclick : "libs/fastclick/fastclick",
		// swiper
		swipe : "libs/swipe/swipe",
		// Require plugins
		text : 'libs/require/text',
		// Templates
		templates : '../templates',
		
		//  appGlobal 
		  appGlobal:"appGlobal"
	 
	}
});

require.config({
	shim : {
		'jquery' : {
			exports : '$'
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},

		'Handlebars' : {
			exports : 'Handlebars'
		},
		'highcharts' : {
			exports : 'Highcharts'
		},
		'exporting' : {
			deps : [ 'highcharts' ],
			exports : 'exporting'
		},
		'highchartsmore' : {
			deps : [ 'highcharts' ],
			exports : 'highchartsmore'
		},
		'jquerymobile' : {
			deps : [ 'jquery' ]
		},

		swipe : {
			exports : 'Swipe'
		},
	 

	}
});

// Let's kick off the application
require([ 'views/app', 'router', 'jquery', 'underscore', 'fastclick' ,'Handlebars','appGlobal'],
		function(AppView, Router, $, _, fastclick,Handlebars,appGlobal) {
 
			$(document).on("mobileinit",

			// Set up the "mobileinit" handler before requiring jQuery Mobile's module
			function() {
				
				//alert("in mobileinit");
				// disable hash-routing
				$.mobile.hashListeningEnabled = true;
				// disable anchor-control
				$.mobile.linkBindingEnabled = false;
				// can cause calling object creation twice and back button issues are solved
				$.mobile.ajaxEnabled = false;
				// Otherwise on first page load, it needs to be a page present
				//   $.mobile.autoInitializePage = false;
				// we want to handle caching and cleaning the DOM ourselves
				$.mobile.page.prototype.options.domCache = false;

				// consider due to performance & compatibility issues
				// not always supported by browsers
				$.mobile.pushStateEnabled = false;
				$.mobile.defaultPageTransition = "none";
				$.mobile.defaultDialogTransition = "none";
				$.mobile.page.prototype.options.degradeInputs.date = false;
				// Solving phonegap issues with back button
				// $.mobile.phonegapNavigationEnabled = true;

				$.mobile.loader.prototype.options.text = "loading...";
				$.mobile.loader.prototype.options.textVisible = true;
				$.mobile.loader.prototype.options.theme = "c";
				$.mobile.loader.prototype.options.html = "";

			 
				
			});
			 
			$(document).on("pagecreate", function(event) {
				$(function() {
					FastClick.attach(document.body);
				});
				 
			});
			var appView = new AppView();

			appView.render();
			Router.initialize({
				appView : appView
			}); // The router now has a copy of all main appview
		});
