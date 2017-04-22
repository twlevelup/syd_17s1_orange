const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToDistressConfirmPage',
    top: 'goToProfile',
    bottom: 'goToReportPage',
    left: 'goToInfoPage',
  },

  goToProfile() {
    $('#watch').removeClass('home');
    window.App.navigate('profile');
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
