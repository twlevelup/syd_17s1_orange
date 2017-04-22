const Page = require('watch_framework').Page;

const template = require('../../templates/pages/home.hbs');
const $ = require('jquery');
const storage = require('../../storage');

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

  getCoordinates(callback) {
    const pos = function showPosition(position) {
      storage.myLat = position.coords.latitude;
      storage.myLong = position.coords.longitude;
    };
    callback(pos);
  },

  render() {
    const today = new Date();
    const d = today.getDate();
    const m = today.getMonth() + 1;
    const y = today.getYear() + 1900;
    this.$el.html(this.template({ d, m, y }));
    $('#watch').addClass('case home');
    return this;
  },

  goToInfoPage() {
    $('#watch').removeClass('home');
    window.App.navigate('info');
  },
  goToDistressConfirmPage() {
    // this.getCoordinates((position) => {
    //   navigator.geolocation.getCurrentPosition(position);
    // });
    $('#watch').removeClass('home');
    window.App.navigate('distressConfirm');
  },

});

module.exports = homePage;
