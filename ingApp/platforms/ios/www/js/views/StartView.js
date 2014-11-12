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
        
        getData : function(url){
            var personRequest = $.ajax({
                    type : 'GET',
                    url : url,
                    crossDomain : 'true',
                    headers : {"Authorization": "Bearer "+appGlobal.accessToken},
                    dataType : 'json'

            });
            personRequest.done(function(response, textStatus, jqXHR) {
                alert(JSON.parse(response));
                Backbone.history.navigate("Home",true);

            });
            personRequest.fail(function(jqXHR, textStatus, errorThrown) {
                alert("error");
            });
        },
        
        onLoadStart : function(evt){
            var self = this;
            var url = evt.url;
            alert(evt.url);
            if(url.indexOf("access_token") >= 0){
                var accessToken = url.substring(url.indexOf("access_token=")+13, url.indexOf("&state"));
                appGlobal.accesstoken = accessToken;
                ref.close();
                var url = "http://ingcommonapi-test.apigee.net/commonapi/v0/nl/me?apikey="+appGlobal.apiKey;
                var request = $.ajax({
                    type : 'GET',
                    url : url,
                    crossDomain : 'true',
                    headers : {"Authorization": "Bearer "+accessToken},
                    dataType : 'json'

                });
                request.done(function(response, textStatus, jqXHR) {
                   // alert(response.userId);
                    var personUrl = "http://ingcommonapi-test.apigee.net/commonapi/v0/nl/persons/"+response.userId+"?apikey="+appGlobal.apiKey;
                    //alert(personUrl);
                    var personRequest = $.ajax({
                            type : 'GET',
                            url : personUrl,
                            crossDomain : 'true',
                            headers : {"Authorization": "Bearer "+appGlobal.accesstoken},
                            dataType : 'json'

                    });
                    personRequest.done(function(response, textStatus, jqXHR) {
                        appGlobal.personData=response;
                        Backbone.history.navigate("Home",true);

                    });
                    personRequest.fail(function(jqXHR, textStatus, errorThrown) {
                        alert(textStatus);
                        alert(JSON.parse(jqXHR));
                    });
//                    self.getData(personUrl);
                   // Backbone.history.navigate("Home",true);
                });
                request.fail(function(jqXHR, textStatus, errorThrown) {
                    alert("me error");
                });
                
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