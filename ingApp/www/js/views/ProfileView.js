/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/ProfileTmp.html' ], function($, _, Backbone,
		hbs, jquerymobile, Router, currentTemplate) {

	var ProfileView = Backbone.View.extend({

		el : '.app > .container-narrow',

		template : hbs.compile(currentTemplate),

		events : {
			"click #BacktoHome" : "goToBacktoHome"
		},
		
		goToBacktoHome:function(){ 
			Backbone.history.navigate("Home",true);
		},
		
		
		initialize : function() {

			this.render();
			$(this.el).trigger('create');

		},

		render : function() { 
			$(this.el).html(this.template(this.model.attributes));

		}

	});
	return ProfileView;
});
