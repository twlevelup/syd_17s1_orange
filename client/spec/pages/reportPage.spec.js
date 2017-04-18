const ReportPage = require('../../src/js/pages/reportPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

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

  describe('button event handlers', () => {
    describe('top', () => {
      it('should take the user to location page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('location');
      });
    });
  });
});
