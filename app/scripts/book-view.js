var BookView = Backbone.View.extend({
  tagName: 'form',
  className: 'book-set-up',
  renderTemplate: _.template($('#book-set-up').text()),
  initialize: function () {
    this.render();
    $('.jumbotron').prepend( this.el );
    this.$el.addClass('form-horizontal');
    this.$el.attr({role: 'form'});

  },

  render: function() {
    this.$el.html(this.renderTemplate(this.model));
  }
})