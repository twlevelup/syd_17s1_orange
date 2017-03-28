const DistressPage = require('../../src/js/pages/distressPage');

let page;

describe('The Distress Page', () => {
  beforeEach(() => {
    page = new DistressPage();
  });

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('Message Sent!');
    });

    it('should pass a variable to the template', () => {
      page.render();
      expect(page.$el).toContainHtml('<h2>Thank you, Jane for sending message</h2>');
    });
  });
});
