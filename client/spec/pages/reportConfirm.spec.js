const ReportConfirm = require('../../src/js/pages/reportConfirm');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Report Confirm Page', () => {
  beforeEach(() => {
    page = new ReportConfirm();
  });

  describe('button event handlers', () => {
    it('should return to home when face button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should return to home when right button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('right');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should return to home when top button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('top');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should return to home when left button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should return to home when bottom button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('bottom');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
  });
});
