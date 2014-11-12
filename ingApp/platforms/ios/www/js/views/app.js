/*** author: @anotherwebstorm */
/**
 *
 * -> Start App 
 */
define([
  'jquery',
  'underscore',
  'backbone', 
  'text!templates/layout.html'
], function($, _, Backbone,  layoutTemplate){
  var AppView = Backbone.View.extend({
    
    el: '.app',
    
    initialize: function () {
     
      this.render();
    },

    render: function () {
      $(this.el).html(layoutTemplate); 
      $(this.el).trigger('create');
    }

  });
  return AppView;
});