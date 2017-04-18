const Page = require('watch_framework').Page;

const template = require('../../templates/pages/distress.hbs');

const distressPage = Page.extend({
  id: 'distress',
  template,

  buttonEvents: {
    face: 'backToHome',
  },
  backToHome() {
    $('#watch').removeClass('distress');
    window.App.navigate('home');
  },
  render() {
    this.$el.html(this.template());
+    $('#watch').addClass('case distress');
     return this;
  },
});


module.exports = distressPage;
