/*** author: @anotherwebstorm */
/**
 *
 * -> Defining our travel app routes
 */
define([ 'jquery', 'underscore', 'backbone','appGlobal'

], function($, _, Backbone,appGlobal) {

	var AppRouter = Backbone.Router.extend({
		routes : {
			// Pages
			'about' : 'about',
			'startup' : 'goToStartUpScreen',
			'Home' : 'goToHomeScreenView',
			'Profile' : 'goToProfileView',
			'health':'goToHealthView',
			// Default
			'*actions' : 'goToStartUpScreen'
		}
	});

	var initialize = function(options) {

		var appView = options.appView;
		var router = new AppRouter(options);

		router.on('route:goToStartUpScreen', function(actions) {
			require([ 'views/StartView' ], function(StartView) {
				var startView = new StartView();

			});
		});

		router.on('route:defaultAction', function(actions) {
			require([ 'views/LoginView' ], function(LoginView) {
				var loginView = new LoginView();

			});
		});

		router.on('route:goToHomeScreenView', function(actions) {
			require([ 'views/HomeScreenView' ], function(HomeScreenView) {
                 
                    
                    var homeScreenView = new HomeScreenView();

			});
		});

		router.on('route:goToProfileView', function(actions) {
			require([ 'views/ProfileView' ], function(
					ProfileView) {
			
					var profileView = new ProfileView();
			 	});

		});
		
		
		router.on('route:goToHealthView', function(actions) {
			require([ 'views/HealthView', 'models/ProfileModel' ], function(
					HealthView, ProfileModel) {
				var model = new ProfileModel();

				//$.when(model.fetch()).done(function(profileData) {
					var healthView = new HealthView({
				 
					});
			 	});

		});
		Backbone.history.start();
	};

	return {
		initialize : initialize
	};

});
