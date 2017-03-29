const InfoPage = require('../../src/js/pages/infoPage');

let page;

describe('The Information Page', () => {
  beforeEach(() => {
    page = new InfoPage();
  });

  describe('rendering', () => {
    it('should provide information', () => {
      page.render();
      expect(page.$el).toContainHtml('<h1>Info Page</h1>');
    });

    it('should pass a variable to the template', () => {
      page.render();
      expect(page.$el).toContainHtml('<p>Question 1</p>');
    });
  });
});
