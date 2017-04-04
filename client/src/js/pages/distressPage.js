const Page = require('watch_framework').Page;

const template = require('../../templates/pages/distress.hbs');

const distressPage = Page.extend({
  id: 'distress',
  template,

  buttonEvents: {
    face: 'backToHome',
  },
  backToHome() {
    window.App.navigate('home');
  },
  render() {
    this.$el.html(this.template({ name: 'Jane' }));
    return this;
  },
});


module.exports = distressPage;
