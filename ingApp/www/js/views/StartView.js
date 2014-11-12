/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/startUp.html','appGlobal' ], function($, _, Backbone,
		hbs, jquerymobile, Router, currentTemplate,appGlobal) {
    var ref = '';
	var StartView = Backbone.View.extend({

		el : '.app > .container-narrow',

		template : hbs.compile(currentTemplate),

		events : {
			"click .start_up_footer" : "goToHome"
		},
        
        onLoadStart : function(evt){
            var url = evt.url;
            alert(evt.url);
            if(url.indexOf("access_token") >= 0){
                var accessToken = url.substring(url.indexOf("access_token=")+13, url.indexOf("&state"));
                appGlobal.accesstoken = accessToken;
                ref.close();
                Backbone.history.navigate("Home",true);
            }
        },
		
		goToHome:function(){
            var self = this;
            ref =  window.open('https://commonapi.paymentslab.nl/authserver/oauth2/authorization?client_id=HomebankApp&redirect_uri=http://localhost:8000&response_type=token&grant_type=implicit', '_blank', 'location=no,toolbar =no');
        ref.addEventListener("loadstart", self.onLoadStart);
			
		},
		
		
		initialize : function() {

			this.render();
		 	$(this.el).trigger('create');

		},

		render : function() { 
			$(this.el).html(this.template());

		}

	});
	return StartView;
});


 