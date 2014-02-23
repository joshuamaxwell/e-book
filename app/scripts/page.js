var Page = Backbone.Model.extend({
  initialize: function(){
    this.pictureSlots = new PictureSlotsCollection();
    this.renderCopyText = this.get('renderCopyText'); 
  }
  
});

var PagesCollection = Backbone.Collection.extend({
  model: Page,

})