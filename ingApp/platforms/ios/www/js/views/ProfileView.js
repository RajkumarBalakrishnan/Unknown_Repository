/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/ProfileTmp.html' ,'appGlobal'], function($, _, Backbone,
		hbs, jquerymobile, Router, currentTemplate,appGlobal) {

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
                                          
           var data =  appGlobal.personData;
                                           
                                           var str =data.name;
                                           var name =str.split(",");
                                           var modelData ={
                                           firstName :name[0],
                                           lastName:name[1],
                                           DOB : data.birthDate ? data.birthDate :"NA",
                                           country : appGlobal.country,
                                           mailid : "NA",
                                           phoneno : "NA",
                                           add1 : data.addresses[0].street,
                                          
                                           
                                           };
                                           //alert(JSON.stringify(modelData));
			$(this.el).html(this.template(modelData));

		}

	});
	return ProfileView;
});
