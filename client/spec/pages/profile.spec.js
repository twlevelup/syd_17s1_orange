const Profile = require('../../src/js/pages/profile');
const App = require('../../src/js/app');
const eventHub = require('watch_framework').EventHub;

let page;

window.App = App;

describe('The Profile Page', () => {
  beforeEach(() => {
    page = new Profile();
  });

  describe('navigation', () => {
    it('should navigate back home when the watch face is pressed', () => {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('home');
    });
  });
  describe('rendering', () => {
    it('should produce the correct HTML', () => {
      page.render();
      expect(page.$el).toContainText('My Profile');
    });
  });
});
