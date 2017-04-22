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

    describe('face', () => {
      it('should return to home when face button pressed', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });

    describe('left', () => {
      it('should go to the previous page when topicPage is false', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });
    describe('top', () => {
      it('should go to the yes question when on question page', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'scrollUp');
        spyOn(page, 'render');
        page.configureButtons();
        page.topicPage = false;
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
      it('should do nothing when not on the question page', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'scrollUp');
        spyOn(page, 'render');
        page.configureButtons();
        page.topicPage = true;
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
        expect(page.render).not.toHaveBeenCalled();
      });
    });
    describe('bottom', () => {
      it('should go to the no question when on question page', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'scrollDown');
        spyOn(page, 'render');
        page.configureButtons();
        page.topicPage = false;
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
      });

      it('should do nothing when not on the question page', () => {
        spyOn(window.App, 'navigate');
        spyOn(page, 'scrollDown');
        spyOn(page, 'render');
        page.configureButtons();
        page.topicPage = true;
        eventHub.trigger('bottom');
        expect(page.scrollDown).toHaveBeenCalled();
        expect(page.render).not.toHaveBeenCalled();
      });
    });
  });
});
