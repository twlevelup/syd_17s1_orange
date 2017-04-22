const InfoPage = require('../../src/js/pages/infoPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Information Page', () => {
  beforeEach(() => {
    page = new InfoPage();
  });

  describe('rendering', () => {
    it('should pass a variable to the template', () => {
      page.render();
      expect(page.$el).toContainHtml('<h1>Topic</h1>');
    });

    it('should pass a variable to the template', () => {
      page.render();
      expect(page.$el).toContainHtml('<p class="infoBox">How do I know if someone is being harassed and what should I do?</p>');
    });

    // it('should show the enter button', () => {
    //   page.render();
    //   expect(page.$el).toContainHtml('<div class="enterButton button">ENTER</div>');
    // });
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should call the enter function and show the first question', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'enter');
        page.configureButtons();
        eventHub.trigger('right');

        expect(page.enter).toHaveBeenCalled();
        // expect(page.$el).toContainHtml('<p class="infoBox">Is the person someone you know?</p>');
      });
    });
  });
});
