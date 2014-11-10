/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/LoginTmp.html' ], function($, _, Backbone,
		hbs, jquerymobile, Router, currentTemplate) {

	var LoginView = Backbone.View.extend({

		el : '.app > .container-narrow',

		template : hbs.compile(currentTemplate),

		events : {

		},

		initialize : function() {

			this.render();

		},

		render : function() { 
			$(this.el).html(this.template());

		}

	});
	return LoginView;
});
