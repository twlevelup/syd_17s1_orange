const LocationPage = require('../../src/js/pages/locationPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;
const storage = require('../../src/storage');

let page;

window.App = App;

describe('The Location Page', () => {
  beforeEach(() => {
    page = new LocationPage();
  });

  describe('navigation', () => {
    it('should navigate back home when the watch face is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
    it('should navigate to summary page when workplace [top] is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('top');
      expect(window.App.navigate).toHaveBeenCalledWith('reportSummary');
    });
    it('should navigate to summary page when school [left] is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('reportSummary');
    });
    it('should navigate to summary page when home [right] is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('right');
      expect(window.App.navigate).toHaveBeenCalledWith('reportSummary');
    });
    it('should navigate to summary page when other [bottom] is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('bottom');
      expect(window.App.navigate).toHaveBeenCalledWith('reportSummary');
    });
  });

  describe('parameter storage', () => {
    it('should store workplace as the location when workplace [top] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('top');
      expect(storage.reportLocation).toEqual('workplace');
    });
    it('should store school as the location when school [left] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('left');
      expect(storage.reportLocation).toEqual('school');
    });
    it('should store home as the location when home [right] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('right');
      expect(storage.reportLocation).toEqual('home');
    });
    it('should store other as the location when other [bottom] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('bottom');
      expect(storage.reportLocation).toEqual('other');
    });
  });
});
