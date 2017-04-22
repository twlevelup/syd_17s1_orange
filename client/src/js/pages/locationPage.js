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
    $('#watch').removeClass('reportLocation');
    window.App.navigate('home');
  },

  workplace() {
    storage.reportLocation = 'Workplace';
    $('#watch').removeClass('case location');
    window.App.navigate('reportSummary');
  },

  school() {
    storage.reportLocation = 'School';
    $('#watch').removeClass('case location');
    window.App.navigate('reportSummary');
  },

  home() {
    storage.reportLocation = 'Home';
    $('#watch').removeClass('case location');
    window.App.navigate('reportSummary');
  },

  other() {
    storage.reportLocation = 'Other';
    $('#watch').removeClass('case location');
    window.App.navigate('reportSummary');
  },

  render() {
    this.$el.html(this.template());
    $('#watch').addClass('case location');
    return this;
  },

});

module.exports = locationPage;
