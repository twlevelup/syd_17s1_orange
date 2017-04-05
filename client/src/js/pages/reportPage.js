const Page = require('watch_framework').Page;
const storage = require('../../storage');
const template = require('../../templates/pages/report.hbs');

const reportPage = Page.extend({
  id: 'report',
  template,

  buttonEvents: {
    face: 'backToHome',
  },

  backToHome() {
    window.App.navigate('home');
  },

  render() {
    const name = storage.myName;
    const phone = storage.myPhone;
    const long = storage.myLong;
    const lat = storage.myLat;

    this.$el.html(this.template({ name, phone, long, lat }));
    return this;
  },
});

module.exports = reportPage;
