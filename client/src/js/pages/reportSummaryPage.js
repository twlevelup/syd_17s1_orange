const Page = require('watch_framework').Page;
const storage = require('../../storage');
const $ = require('jquery');
const template = require('../../templates/pages/reportSummary.hbs');

const reportSummaryPage = Page.extend({
  id: 'reportSummary',
  template,

  buttonEvents: {
    face: 'backToHome',
    right: 'sendReport',
    left: 'backToHome',
  },

  backToHome() {
    $('#watch').removeClass('reportSummary');
    window.App.navigate('home');
  },

  sendReport() {
    $('#watch').removeClass('reportSummary');
    window.App.navigate('reportConfirm');
  },

  render() {
    const name = storage.myName;
    const phone = storage.myPhone;
    const time = storage.reportTime;
    const location = storage.reportLocation;

    this.$el.html(this.template({ name, phone, time, location }));
    $('#watch').addClass('case reportSummary');
    return this;
  },
});


module.exports = reportSummaryPage;
