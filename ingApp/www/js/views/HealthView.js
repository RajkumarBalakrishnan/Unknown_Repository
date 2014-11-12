/*** author: @anotherwebstorm */
/**
 * -> Home View
 */
define([ 'jquery', 'underscore', 'backbone', 'Handlebars', 'jquerymobile',
		'router', 'text!templates/HealthTmp.html', 'highcharts', 'exporting',
		'highchartsmore' ], function($, _, Backbone, hbs, jquerymobile, Router,
		currentTemplate, highcharts, exporting, highchartsmore) {

	var HealthView = Backbone.View.extend({

		el : '.app > .container-narrow',

		template : hbs.compile(currentTemplate),

		events : {
			"click #Profile" : "goToProfile"
		},
		goToProfile : function() {
			Backbone.history.navigate("Profile", true);
		},
		initialize : function() {

			this.render();
			$(this.el).trigger('create');

		},
		renderChart1 : function() {
			$('#Exp_Chart').highcharts(
					{
						chart : {
							type : 'pie',
							backgroundColor : 'transparent',
							spacing : 0,
							height : 120,
							borderColor : '#EBBA95',
							borderRadius : 100,
							borderWidth : 2,
							 margin:0,

						},
						title : {
							text : ''
						},
						subtitle : {
							text : ''
						},
						plotOptions : {
							pie : {
								innerSize : '80%',

								size : '100%',
								dataLabels : {
									enabled : false,
								}
							}
						},
						navigation : {
							buttonOptions : {
								enabled : false
							}
						},
						tooltip : {
							enabled : false
						},
						series : [ {
							name : 'Delivered amount',
							data : [ [ 'Bananas', 8 ], [ 'Kiwi', 3 ],
									[ 'Mixed nuts', 1 ], [ 'Oranges', 6 ],
									[ 'Apples', 8 ], [ 'Pears', 4 ],
									[ 'Grapes (bunch)', 1 ] ]
						} ]
					});

		},
		render : function() {

			$(this.el).html(this.template());
			this.renderChart1();

		}

	});
	return HealthView;
});
