class List {
  constructor(client, listId) {
    this.client = client;
    this.listId = listId;
  }

  add = name => this.client.post('/list', { name });

  all = () => this.client.get('/lists');

  contacts = bookmark => this.client.get(`/list/${this.listId}/contacts${bookmark ? `/${bookmark}` : ''}`);
}

export default List;
