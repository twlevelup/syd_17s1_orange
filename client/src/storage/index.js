const Backbone = require('backbone');
const eventsData = require('./events.json');
const details = require('./details.json');
const report = require('./report.json');

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
  this.myName = details.name;
  this.myPhone = details.phone;
  this.myLong = details.gps_long;
  this.myLat = details.gps_lat;
  this.reportLocation = report.location;
  this.reportTime = report.time;
}

module.exports = new Storage();
