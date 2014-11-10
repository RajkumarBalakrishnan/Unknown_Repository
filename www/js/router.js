/*** author: @anotherwebstorm */
/**
 *
 * -> Defining our travel app routes
 */
define([ 'jquery', 'underscore', 'backbone'

], function($, _, Backbone) {

	var AppRouter = Backbone.Router.extend({
		routes : {
			// Pages
			'about' : 'about',
		 
			// Default
			'*actions' : 'defaultAction'
		}
	});
  

	var initialize = function(options) {

		var appView = options.appView;
		var router = new AppRouter(options);

		router.on('route:defaultAction', function(actions) {
			require([ 'views/LoginView' ],
					function(LoginView) {
						var loginView = new LoginView();
						 
					});
		});

	 

		Backbone.history.start();
	};

	return {
		initialize : initialize
	};

});
