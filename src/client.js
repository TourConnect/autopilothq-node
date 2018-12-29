import merge from 'lodash.merge';
import request from 'request-promise-native';

class Client {
  constructor(requestOpts) {
    this.requestOpts = requestOpts;
  }

  request(args) {
    const defaultArgs = {
      headers: { 'Content-Type': 'application/json' },
      json: true,
    };
    return request(merge({}, this.requestOpts, defaultArgs, args));
  }

  get = (endpoint, data) => this.request({ method: 'GET', uri: endpoint, qs: data });

  post = (endpoint, data) => this.request({ method: 'POST', uri: endpoint, body: data });

  put = (endpoint, data) => this.request({ method: 'PUT', uri: endpoint, body: data });

  delete = (endpoint, data) => this.request({ method: 'DELETE', url: endpoint, qs: data });
}

export default Client;
