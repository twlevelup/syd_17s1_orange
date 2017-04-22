const Page = require('watch_framework').Page;
const template = require('../../templates/pages/report.hbs');
const $ = require('jquery');
const storage = require('../../storage');

const reportPage = Page.extend({
  id: 'report',
  template,

  buttonEvents: {
    face: 'backToHome',
    top: 'pastReport',
    left: 'backToHome',
    bottom: 'potentialReport',
  },

  backToHome() {
    $('#watch').removeClass('report');
    window.App.navigate('home');
  },

  pastReport() {
    storage.reportTime = 'Past';
    $('#watch').removeClass('report');
    window.App.navigate('location');
  },

  potentialReport() {
    storage.reportTime = 'Potential';
    $('#watch').removeClass('report');
    window.App.navigate('location');
  },

  render() {
    $('#watch').addClass('case report');
    this.$el.html(this.template());
    return this;
  },
});

module.exports = reportPage;
