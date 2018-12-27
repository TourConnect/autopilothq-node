import nock from 'nock';

// const Autopilot = require('../src');
const Autopilot = require('../lib/index');
// import Autopilot from '../lib';

const autopilotApi = nock('https://api2.autopilothq.com/v1/');
const autopilot = new Autopilot('key');

describe('contacts', () => {
  beforeEach(() => {
    jest.setTimeout(2000);
  });
  it('should add a contact', () => {
    expect.assertions(1);
    autopilotApi.post('/contact').reply(200, { contact_id: "person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7" });

    const request = autopilot.contact.add({ email: 'test@example.com'})
    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' })
  })
  it('should update a contact', () => {
    expect.assertions(1);
    autopilotApi.post('/contact').reply(200, { contact_id: "person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7" });

    const request = autopilot.contact.update({ email: 'test@example.com'})

    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' })
  })
  it('should get a contact', () => {
    expect.assertions(1);
    autopilotApi.get(/\/contact\/\S*$/).reply(200, { contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

    const request = autopilot.contact.get('test@example.com')

    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

  })
  it('should delete a contact', () => {
    expect.assertions(1);
    autopilotApi.delete(/\/contact\/\S*$/).reply(200, { contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

    const request = autopilot.contact.delete('test@example.com')

    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });
  })
});
