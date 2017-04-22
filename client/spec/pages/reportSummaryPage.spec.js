const ReportSummaryPage = require('../../src/js/pages/reportSummaryPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Report Summary Page', () => {
  beforeEach(() => {
    page = new ReportSummaryPage();
  });

  describe('rendering', () => {
    it('should contain the header for Name', () => {
      page.render();
      expect(page.$el).toContainText('Name:');
    });
    it('should contain the header for Phone', () => {
      page.render();
      expect(page.$el).toContainText('Phone:');
    });
    it('should contain the header for Time', () => {
      page.render();
      expect(page.$el).toContainText('Time:');
    });
    it('should contain the header for Location', () => {
      page.render();
      expect(page.$el).toContainText('Location:');
    });
  });

  describe('button event handlers', () => {
    it('should return to home when face button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should return to home when left button pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should go to a confirmation change when right button is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('right');
      expect(window.App.navigate).toHaveBeenCalledWith('reportConfirm');
    });
  });
});
