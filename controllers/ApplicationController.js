Mustle.ApplicationController = Ember.Controller.extend({
  showSocialIcons: false,

  actions: {
    toggleSocialIcons: function() {
      this.set('showSocialIcons', true);
    },
    toggleSocialIconsOff: function() {
      this.set('showSocialIcons', false);
    }
  }
});
