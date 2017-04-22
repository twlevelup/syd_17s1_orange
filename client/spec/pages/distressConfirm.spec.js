const DistressConfirm = require('../../src/js/pages/distressConfirm');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Distress confirmation page', () => {
  beforeEach(() => {
    page = new DistressConfirm();
  });

  describe('button event handlers', () => {
    describe('right', () => {
      it('should take you to the message sent screen', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('distress');
      });
    });
    describe('left', () => {
      it('should take you back to the home screen', () => {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });
  });

  // describe('geolocation rendering', () => {
  //   it('should contain the correct lat and long inside the watch', () => {
  //     spyOn(page, 'getLocation').and.returnValue({
  //       lat: '131.123',
  //       lng: '300.123',
  //     });
  //     page.render();
  //     expect(page.$el).toContainText('131.123');
  //   });
  // });
});
