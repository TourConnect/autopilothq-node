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

    this.contact = param => new Contact(client, param);
    this.contacts = (bookmark = null) => this.contact().all(bookmark);
    this.list = param => new List(client, param);
    this.lists = () => this.list().all();
  }
}

export default Autopilot;
