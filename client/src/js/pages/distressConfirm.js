const Page = require('watch_framework').Page;
const $ = require('jquery');

const template = require('../../templates/pages/distressConfirm.hbs');

const distressConfirm = Page.extend({
  id: 'distressConfirm',
  template,

  buttonEvents: {
    left: 'backToHome',
    right: 'goToDistress',

  },

  backToHome() {
    $('#watch').removeClass('distressconfirm');
    window.App.navigate('home');
  },

  goToDistress() {
    $('#watch').removeClass('distressconfirm');
    window.App.navigate('distress');
  },

  render() {
    this.$el.html(this.template());
    $('#watch').addClass('case distressconfirm');
    return this;
  },

});


module.exports = distressConfirm;
