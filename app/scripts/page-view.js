var PageView = Backbone.View.extend({
  renderTemplate: _.template($('#page-spread-template').text()),
  className: 'spread',
  initialize: function(){
    $('.book-pages').append( this.el );
    this.render();
    console.log('the pageview collection is:  ', this.collection);
    this.listenTo(this.collection, 'change:all', this.render());
  },


  render: function(){
    // console.log('template', this.renderTemplate(this.model.attributes));
    console.log('pageviews rendering......');
    var childName = this.collection.get('characters').child.name;
    var parentName = this.collection.get('characters').parent.name;
    var bookNames = {
      parent: parentName,
      child: childName
    }
    this.model.set({
      copyText: this.model.renderCopyText(bookNames)
    });
    this.$el.html(this.renderTemplate(this.model));
  }
})