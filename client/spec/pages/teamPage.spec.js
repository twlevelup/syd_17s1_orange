const TeamPage = require('../../src/js/pages/teamPage');

let page;

describe('Check-in dance', () => {
  beforeEach(() => {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', () => {
    it('should include the text "Made by:"', () => {
      expect(page.$el).toContainText('Made by:');
    });
    it('should include the text "Jeremy"', () => {
      expect(page.$el).toContainText('Jeremy');
    });
    it('should include the text "Jessica"', () => {
      expect(page.$el).toContainText('Jessica');
    });
    it('should include the text "Michelle Leman"', () => {
      expect(page.$el).toContainText('Michelle Leman');
    });
    it('should include the text "Rosie"', () => {
      expect(page.$el).toContainText('Rosie');
    });
    it('should include the text "Albert"', () => {
      expect(page.$el).toContainText('Albert');
    });
  });
});
