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
			require([ 'views/ProfileView', 'models/ProfileModel' ], function(
					ProfileView, ProfileModel) {
				var model = new ProfileModel();

				//$.when(model.fetch()).done(function(profileData) {
					var profileView = new ProfileView({
					model:model	//model : profileData
					});
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
