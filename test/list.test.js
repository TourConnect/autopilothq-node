import nock from 'nock';

import Autopilot from '../src';

const autopilotApi = nock('https://api2.autopilothq.com/v1/');
const autopilot = new Autopilot('key');

describe('lists', () => {
  it('should get all lists', () => {
    expect.assertions(1);
    autopilotApi.get('/lists').reply(200, {
      lists: [{ list_id: 'contactlist_Sunset Contacts', title: 'Sunset Contacts' }],
    });

    const request = autopilot.lists();
    return expect(request).resolves.toEqual({ lists: [{ list_id: 'contactlist_Sunset Contacts', title: 'Sunset Contacts' }] });
  });
  it('should add a lists', () => {
    expect.assertions(1);
    autopilotApi.post('/list', { name: 'Test List' }).reply(200, {
      list_id: 'contactlist_11944F3C-F91F-48AD-A388-5647A592BF8B',
      name: 'Test List',
    });

    const request = autopilot.list().add('Test List');
    return expect(request).resolves.toEqual({
      list_id: 'contactlist_11944F3C-F91F-48AD-A388-5647A592BF8B',
      name: 'Test List',
    });
  });
  it("should get a list's contacts", () => {
    expect.assertions(1);
    autopilotApi.get(/\/list\/?\S*\/contacts$/).reply(200, { contacts: [], total_contacts: 0 });

    const request = autopilot.list('contactlist_11944F3C-F91F-48AD-A388-5647A592BF8B').contacts();
    return expect(request).resolves.toEqual({ contacts: [], total_contacts: 0 });
  });
  it("should get a list's contacts with bookmark", () => {
    expect.assertions(1);
    autopilotApi.get(/\/list\/\S*\/contacts\/?\S*$/).reply(200, { contacts: [], total_contacts: 0 });

    const request = autopilot.list('contactlist_11944F3C-F91F-48AD-A388-5647A592BF8B').contacts('person_9EAF39E4-9AEC-4134-964A-D9D8D54162E7');
    return expect(request).resolves.toEqual({ contacts: [], total_contacts: 0 });
  });
});
