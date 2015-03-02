Mustle = Ember.Application.create({ LOG_TRANSITIONS: true });

Mustle.Router.map(function() {
  this.route('home', { path: '/' })
});
