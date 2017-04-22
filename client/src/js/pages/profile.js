const Page = require('watch_framework').Page;
const $ = require('jquery');
const template = require('../../templates/pages/profile.hbs');
const storage = require('../../storage');

const profile = Page.extend({
  id: 'profile',
  template,

  buttonEvents: {
    left: 'backToHome',
    face: 'backToHome',
  },

  backToHome() {
    $('#watch').removeClass('profile');
    window.App.navigate('home');
  },
  render() {
    const name = storage.myName;
    const phone = storage.myPhone;
    const lat = storage.myLat;
    const long = storage.myLong;
    this.$el.html(this.template({ name, phone, lat, long }));
    $('#watch').addClass('case profile');
    return this;
  },
});
module.exports = profile;
