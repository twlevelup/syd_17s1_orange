const Page = require('watch_framework').Page;

const template = require('../../templates/pages/info.hbs');


const infoPage = Page.extend({
  id: 'info',
  template,

  buttonEvents: {
    // right: 'goToContacts',
    // top: 'scrollUp',
    // bottom: 'scrollDown',
    // left: 'goToInfoPage',
    face: 'home',
  },

  home() {
    window.App.navigate('home');
  },

  render() {
    this.$el.html(this.template({ question: 'Question 1' }));
    return this;
  },
});


module.exports = infoPage;
