class Contact {
 constructor(client) {
   this.client = client;
 }
 add = (obj) => this.client.post('/contact', obj);
 update = (obj) => this.client.post('/contact', obj);
 get = (contactIdOrEmail) => this.client.get(`/contact/${contactIdOrEmail}`);
 delete = (contactIdOrEmail) => this.client.delete(`/contact/${contactIdOrEmail}`);
 unsubscribe = (contactIdOrEmail) => this.client.post(`/contact/${contactIdOrEmail}/unsubscribe`, obj);
}

module.exports = Contact;
