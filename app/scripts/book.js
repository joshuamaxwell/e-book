var Book = Backbone.Model.extend({
  initialize: function(){
    this.pages = new PagesCollection;
    this.pictures = new PicturesCollection;
  }
});

var BooksCollection = Backbone.Collection.extend({
  model: Book,
});