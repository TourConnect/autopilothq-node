import Client from './client';
import Contact from './contact';
import List from './list';

class Autopilot {
  constructor(apiKey, options) {
    this.apiKey = apiKey;

    const client = new Client({
      baseUrl: 'https://api2.autopilothq.com/v1/',
      headers: { autopilotapikey: apiKey },
      ...options,
    });

    this.contact = new Contact(client);
    this.list = new List(client);
  }
}

export default Autopilot;
