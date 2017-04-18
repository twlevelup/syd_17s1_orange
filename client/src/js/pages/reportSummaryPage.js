const Page = require('watch_framework').Page;

const reportSummaryPage = Page.extend({
  id: 'reportSummary',
  render() {
    this.$el.html();
    return this;
  },
});


module.exports = reportSummaryPage;
