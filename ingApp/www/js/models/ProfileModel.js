define([ 'backbone', 'appGlobal' ], function(Backbone, appGlobal) {

	var ProfileModel = Backbone.Model.extend({
		/* urlRoot: "http://121.242.159.57/api/commonsvc/FetchLanguages",
		    responseMenu :appGlobal.menuData,*/
		defaults : {
			DOB : "18/11/1989",
			country : "Netherlands",
			mailid : "john.smith@gmail.com",
			phoneno : '+3120343243232',
			add1 : "De Boelelaan 2",
			add2 : "1083 HJ Amsterdam, Netherlands",
		},

	});

	return ProfileModel;

});