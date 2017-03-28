const HomePage = require('../../src/js/pages/homePage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Home Page', () => {
  beforeEach(() => {
    page = new HomePage();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take the user to the distress page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('distress');
      });
    });

    describe('top', () => {
      it('should scroll the watch face up', () => {
        spyOn(page, 'scrollUp');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.scrollUp).toHaveBeenCalled();
      });
    });

    describe('bottom', () => {
      it('should load the report page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalled();
      });
    });

    describe('left', () => {
      it('should take the user to the demo page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('demo');
      });
    });
  });

  describe('rendering', () => {
    it('returns the view object', () => {
      expect(page.render()).toEqual(page);
    });
  });
});
