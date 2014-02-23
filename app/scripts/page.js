var Page = Backbone.Model.extend({
  initialize: function(){
    this.pictureSlots = new PictureSlotsCollection(); 
  }
  
});

var PagesCollection = Backbone.Collection.extend({
  model: Page,
})