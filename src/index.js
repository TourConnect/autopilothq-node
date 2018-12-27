const Client = require('./client');
const Contact = require('./contact');

class Autopilot {
  constructor(apiKey, options) {
    this.apiKey = apiKey;

    const client = new Client({
      baseUrl: 'https://api2.autopilothq.com/v1/',
      headers: { autopilotapikey: apiKey },
    });

    this.contact = new Contact(client);
  }
}

module.exports = Autopilot;
