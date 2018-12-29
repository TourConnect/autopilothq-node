import parse from './utils/parse';

class Contact {
  constructor(client, contactIdOrEmail) {
    this.client = client;
    this.contactIdOrEmail = contactIdOrEmail;

    this.standardFields = [
      'contact_id',
      'Email',
      'Twitter',
      'FirstName',
      'LastName',
      'Salutation',
      'Company',
      'NumberOfEmployees',
      'Title',
      'Industry',
      'Phone',
      'MobilePhone',
      'Fax',
      'Website',
      'MailingStreet',
      'MailingCity',
      'MailingState',
      'MailingPostalCode',
      'MailingCountry',
      'owner_name',
      'LeadSource',
      'Status',
      'LinkedIn',
      'unsubscribed',
      'custom',
      '_autopilot_session_id',
      '_autopilot_list',
      'notify',
    ];
  }

  add = (data) => {
    if (Array.isArray(data)) {
      return this.client.post('/contacts', { contacts: data.map(obj => parse(this.standardFields, obj)) });
    }
    return this.client.post('/contact', { contact: parse(this.standardFields, data) });
  }

  addToList = listId => this.client.post(`/list/${listId}/contact/${this.contactIdOrEmail}`);

  all = (bookmark = null) => this.client.get(`/contacts${bookmark ? `/${bookmark}` : ''}`);

  delete = () => this.client.delete(`/contact/${this.contactIdOrEmail}`);

  get = () => this.client.get(`/contact/${this.contactIdOrEmail}`);

  isOnList = listId => this.client.get(`/list/${listId}/contact/${this.contactIdOrEmail}`);

  removeFromList = listId => this.client.delete(`/list/${listId}/contact/${this.contactIdOrEmail}`);

  unsubscribe = () => this.client.post(`/contact/${this.contactIdOrEmail}/unsubscribe`);

  update = obj => this.client.post('/contact', { contact: parse(this.standardFields, obj) });
}

export default Contact;
