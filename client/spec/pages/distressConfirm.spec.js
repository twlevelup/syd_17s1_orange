const DistressConfirm = require('../../src/js/pages/distressConfirm');

let page;

describe('The Distress Confirm Page', () => {
  beforeEach(() => {
    page = new DistressConfirm();
  }); // closes the before Each

  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('Do you want to sent a distress message?');
    }); // closes it statement
  }); // closing html test
}); // closing distress confirm page
