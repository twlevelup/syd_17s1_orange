const Backbone = require('backbone');

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'Jimmy',
    phoneNumber: '0431111222',
  },
});

module.exports = Contact;
