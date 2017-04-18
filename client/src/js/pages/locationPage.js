const Page = require('watch_framework').Page;
const storage = require('../../storage');

const locationPage = Page.extend({
  id: 'location',

  buttonEvents: {
    face: 'backToHome',
    up: 'workplace',
    left: 'school',
    right: 'home',
    down: 'other',
  },

  backToHome() {
    window.App.navigate('home');
  },

  workplace() {
    storage.reportLocation = 'workplace';
    window.App.navigate('reportSummary');
  },

  school() {
    storage.reportLocation = 'school';
    window.App.navigate('reportSummary');
  },

  home() {
    storage.reportLocation = 'home';
    window.App.navigate('reportSummary');
  },

  other() {
    storage.reportLocation = 'other';
    window.App.navigate('reportSummary');
  },

  render() {
    this.$el.html();
    return this;
  },

});

module.exports = locationPage;
