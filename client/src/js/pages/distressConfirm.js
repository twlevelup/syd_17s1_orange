const Page = require('watch_framework').Page;
const $ = require('jquery');


// const storage = require('../../storage');
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
    this.$el.html(this.template({
      phone: storage.myPhone,
      lat: storage.myLat,
      long: storage.myLong,
    }));
    $('#watch').addClass('case distressconfirm');
    return this;
  },
});


module.exports = distressConfirm;
