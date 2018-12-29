import nock from 'nock';

import Autopilot from '../src';

const autopilotApi = nock('https://api2.autopilothq.com/v1/');
const autopilot = new Autopilot('key');

describe('contacts', () => {
  it('should add a contact', () => {
    expect.assertions(1);
    autopilotApi.post('/contact').reply(200, { contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

    const request = autopilot.contact.add({ email: 'test@example.com' });
    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });
  });
  it('should bulk add a contact', () => {
    expect.assertions(1);
    autopilotApi.post('/contacts').reply(200, {
      contact_ids: [
        'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7',
        'person_9EAF39E4-9AEC-4134-964A-D9D8D5416AAA',
      ],
      email_contact_map: {
        'chris@autopilothq.com': 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7',
        'peter@autopilothq.com': 'person_9EAF39E4-9AEC-4134-964A-D9D8D5416AAA',
      },
    });

    const request = autopilot.contact.bulkAdd([{ Email: 'chris@autopilothq.com' }, { Email: 'peter@autopilothq.com' }]);
    return expect(request).resolves.toEqual({
      contact_ids: [
        'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7',
        'person_9EAF39E4-9AEC-4134-964A-D9D8D5416AAA',
      ],
      email_contact_map: {
        'chris@autopilothq.com': 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7',
        'peter@autopilothq.com': 'person_9EAF39E4-9AEC-4134-964A-D9D8D5416AAA',
      },
    });
  });
  it('should update a contact', () => {
    expect.assertions(1);
    autopilotApi.post('/contact').reply(200, { contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

    const request = autopilot.contact.update({ email: 'test@example.com' });

    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });
  });
  it('should get a contact', () => {
    expect.assertions(1);
    autopilotApi.get(/\/contact\/\S*$/).reply(200, { contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });

    const request = autopilot.contact.get('test@example.com');

    return expect(request).resolves.toEqual({ contact_id: 'person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7' });
  });
  it('should unsubscribe a contact', () => {
    expect.assertions(1);
    autopilotApi.post(/\/contact\/\S*\/unsubscribe$/).reply(200, {});

    const request = autopilot.contact.unsubscribe('test@example.com');

    return expect(request).resolves.toEqual({});
  });
  it('should delete a contact', () => {
    expect.assertions(1);
    autopilotApi.delete(/\/contact\/\S*$/).reply(200, {});

    const request = autopilot.contact.delete('test@example.com');

    return expect(request).resolves.toEqual({});
  });
  it('should list all contacts', () => {
    expect.assertions(1);
    autopilotApi.get(/\/contacts$/).reply(200, { contacts: [], total_contacts: 0 });

    const request = autopilot.contact.all();

    return expect(request).resolves.toEqual({ contacts: [], total_contacts: 0 });
  });
  it('should list all contacts with bookmark', () => {
    expect.assertions(1);
    autopilotApi.get(/\/contacts\/?\S*$/).reply(200, { contacts: [], total_contacts: 0 });

    const request = autopilot.contact.all('person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7');

    return expect(request).resolves.toEqual({ contacts: [], total_contacts: 0 });
  });
});
