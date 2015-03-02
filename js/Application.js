Mustle = Ember.Application.create({ LOG_TRANSITIONS: true });

Mustle.Router.map(function() {
  this.route('home', { path: '/' })
  this.resource('fashion', function() {
    this.resource('article1');
    this.resource('article2');
    this.resource('article3');
  })
});

$(function () {
  $('[data-toggle="popover"]').popover()
})
