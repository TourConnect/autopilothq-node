import parse from './utils/parse';

class Contact {
  constructor(client) {
    this.client = client;

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

  add = obj => this.client.post('/contact', { contact: parse(this.standardFields, obj) });

  all = (bookmark = null) => this.client.get(`/contacts${bookmark ? `/${bookmark}` : ''}`);

  bulkAdd = array => this.client.post('/contacts', { contacts: array.map(obj => parse(this.standardFields, obj)) });

  update = obj => this.client.post('/contact', { contact: parse(this.standardFields, obj) });

  get = contactIdOrEmail => this.client.get(`/contact/${contactIdOrEmail}`);

  delete = contactIdOrEmail => this.client.delete(`/contact/${contactIdOrEmail}`);

  unsubscribe = contactIdOrEmail => this.client.post(`/contact/${contactIdOrEmail}/unsubscribe`);

  // addToList = (contactIdOrEmail, listId) => this.client.post(`/list/${listId}/contact/${contactIdOrEmail}`)
  // isOnList = (contactIdOrEmail, )
}

export default Contact;
