const Page = require('watch_framework').Page;
const template = require('../../templates/pages/report.hbs');
const $ = require('jquery');

const reportPage = Page.extend({
  id: 'report',
  template,

  buttonEvents: {
    face: 'backToHome',
    top: 'goToLocation',
  },

  backToHome() {
    window.App.navigate('home');
  },

  goToLocation() {
    window.App.navigate('location');
  },

  render() {
    this.$el.html(this.template());
    $('#watch').addClass('case report');
    return this;
  },
});

module.exports = reportPage;
