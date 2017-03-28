const Page = require('watch_framework').Page;

const reportPage = Page.extend({
  id: 'report',
  render() {
    this.$el.html('Report Page');
    return this;
  },
});

module.exports = reportPage;
