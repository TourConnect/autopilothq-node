import Client from './client';
import Contact from './contact';

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

export default Autopilot;
