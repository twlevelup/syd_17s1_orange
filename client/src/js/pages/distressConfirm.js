const Page = require('watch_framework').Page;
const $ = require('jquery');


const storage = require('../../storage');
const template = require('../../templates/pages/distressConfirm.hbs');

const distressConfirm = Page.extend({
  // var longitude;
  // var latitude;
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

  // get location info from browser
  // navigator.geolocation.getCurrentPosition(function(location) {
  //   // latitude = console.log(location.coords.latitude);
  //   // longitude = console.log(location.coords.longitude);
  //   // console.log(location.coords.accuracy);
  //   this.$el.html(this.template({ phone: storage.myPhone, lat: location.coords.latitude, long: location.coords.longitude}));
  // });

  render() {
    this.$el.html(this.template({ phone: storage.myPhone, lat: storage.myLat, long: storage.myLong}));
    $('#watch').addClass('case distressconfirm');
    return this;
  },

});


module.exports = distressConfirm;
