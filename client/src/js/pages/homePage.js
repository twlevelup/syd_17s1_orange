const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');

const homePage = Page.extend({

  id: 'home',

  template,

  buttonEvents: {
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'goToMyDemoPage',
  },

  goToContacts() {
    window.App.navigate('contacts');
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  render() {
    this.$el.html(this.template());
    return this;
  },

  goToMyDemoPage() {
    window.App.navigate('demo');
  },

});

module.exports = homePage;
