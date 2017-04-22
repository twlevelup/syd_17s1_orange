const Page = require('watch_framework').Page;
const $ = require('jquery');
const template = require('../../templates/pages/reportConfirm.hbs');

const reportConfirm = Page.extend({
  id: 'reportConfirm',
  template,

  buttonEvents: {
    face: 'backToHome',
    left: 'backToHome',
    right: 'backToHome',
    top: 'backToHome',
    bottom: 'backToHome',
  },
  backToHome() {
    $('#watch').removeClass('reportConfirm');
    window.App.navigate('home');
  },
  render() {
    $('#watch').addClass('case reportConfirm');
    this.$el.html();
    return this;
  },
});


module.exports = reportConfirm;
