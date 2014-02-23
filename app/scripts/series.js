var Series = new Backbone.Model.extend({
  initialize: function(){
    this.books = new BooksCollection;
  }
});