const ReportPage = require('../../src/js/pages/reportPage');

let page;

describe('The Report Page', () => {
  beforeEach(() => {
    page = new ReportPage();
  });

  describe('rendering', () => {
    it('should show some text', () => {
      page.render();
      expect(page.$el).toContainText('Report Page');
    });
  });
});
