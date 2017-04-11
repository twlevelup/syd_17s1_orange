const Page = require('watch_framework').Page;

const template = require('../../templates/pages/distressConfirm.hbs');

const distressConfirm = Page.extend({
  id: 'distressConfirm',
  template,

  buttonEvents: {
    left: 'backToHome',
    right: 'goToDistress',

  },
  backToHome() {
    window.App.navigate('home');
  },
  goToDistress() {
    window.App.navigate('distress');
  },
  render() {
    this.$el.html(this.template());
    return this;
  },
});


module.exports = distressConfirm;
