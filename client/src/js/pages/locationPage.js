const Page = require('watch_framework').Page;
const storage = require('../../storage');
const $ = require('jquery');
const template = require('../../templates/pages/location.hbs');

const locationPage = Page.extend({
  id: 'location',
  template,

  buttonEvents: {
    face: 'backToHome',
    top: 'workplace',
    left: 'school',
    right: 'home',
    bottom: 'other',
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
    this.$el.html(this.template());
    $('#watch').addClass('case location');
    return this;
  },

});

module.exports = locationPage;
