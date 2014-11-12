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
			"click #Health" : "goToHealth",
            "click #Logout" :"goToLogout"
                                              
		},
        goToLogout:function(){
        Backbone.history.navigate("*actions", true);
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
            var data =  appGlobal.personData;
            var str =data.name;
            var name =str.split(",");
            var modeldata = {
            firstName :name[0],
                lastName:name[1]
            };
           
			$(this.el).html(this.template(modeldata));

		}

	});
	return HomeScreenView;
});
