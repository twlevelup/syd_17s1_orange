const ReportPage = require('../../src/js/pages/reportPage');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;
const storage = require('../../src/storage');

let page;

window.App = App;

describe('The Report Page', () => {
  beforeEach(() => {
    page = new ReportPage();
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
    describe('bottom', () => {
      it('should take the user to location page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('location');
      });
    });
    describe('left', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });
    describe('face', () => {
      it('should take the user to the home page', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });
  });
  describe('parameter storage', () => {
    it('should store Past as the time when past [top] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('top');
      expect(storage.reportTime).toEqual('Past');
    });
    it('should store Potential as the time when potential [bottom] is pressed', () => {
      page.configureButtons();
      eventHub.trigger('bottom');
      expect(storage.reportTime).toEqual('Potential');
    });
  });
});
