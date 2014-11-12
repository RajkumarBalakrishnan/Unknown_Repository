/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/HomeTmp.html', 'appGlobal' ], function($, _, Backbone,
		hbs, jquerymobile, Router, currentTemplate, appGlobal) {

	var HomeScreenView = Backbone.View.extend({

		el : '.app > .container-narrow',

		template : hbs.compile(currentTemplate),

		events : {
			"click #Profile" : "goToProfile",
			"click #Health" : "goToHealth"
		},
		goToHealth:function(){
			Backbone.history.navigate("health", true);
		},
		goToProfile : function() {
			Backbone.history.navigate("Profile", true);
		},
		initialize : function() {

			this.render();
			$(this.el).trigger('create');

		},

		render : function() {
            alert(appGlobal.accesstoken);

			$(this.el).html(this.template());

		}

	});
	return HomeScreenView;
});
