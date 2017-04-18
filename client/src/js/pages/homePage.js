const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToDistressConfirmPage',
    top: 'scrollUp',
    bottom: 'goToReportPage',
    left: 'goToInfoPage',
  },
  goToContacts() {
    window.App.navigate('contacts');
  },
  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  goToReportPage() {
    $('#watch').removeClass('home');
    window.App.navigate('report');
  },

  render() {
    this.$el.html(this.template());
    $('#watch').addClass('case home');
    return this;
  },

  goToInfoPage() {
    $('#watch').removeClass('home');
    window.App.navigate('info');
  },
  goToDistressConfirmPage() {
    $('#watch').removeClass('home');
    window.App.navigate('distressConfirm');
  },

});

module.exports = homePage;
