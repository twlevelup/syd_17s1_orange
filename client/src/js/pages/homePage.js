const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToDistressPage',
    top: 'scrollUp',
    bottom: 'goToReportPage',
    left: 'goToMyDemoPage',
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  goToReportPage() {
    window.App.navigate('report');
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

  goToMyDemoPage() {
    window.App.navigate('demo');
  },
  goToDistressPage() {
    window.App.navigate('distress');
  },

});

module.exports = homePage;
