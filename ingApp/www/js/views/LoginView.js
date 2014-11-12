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
			"click #Login_btn" : "goToLogin"
		},
		
		goToLogin:function(){ 
			Backbone.history.navigate("Home",true);
		},
		
		
		initialize : function() {

			this.render();
		//	$(this.el).trigger('create');

		},

		render : function() { 
			$(this.el).html(this.template());

		}

	});
	return LoginView;
});
