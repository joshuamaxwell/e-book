var Page = Backbone.Model.extend({
  initialize: function(){
    this.renderCopyText = this.get('renderCopyText'); 
  }
  
});

var PagesCollection = Backbone.Collection.extend({
  model: Page,

})