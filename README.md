# autopilothq-node
A node client for the AutopilotHQ API

[![](https://img.shields.io/npm/v/autopilothq-node.svg?style=popout)](https://npmjs.com/package/autopilothq-node)
[![Build Status](https://travis-ci.org/TourConnect/autopilothq-node.svg?branch=master)](https://travis-ci.org/TourConnect/autopilothq-node)

For detailed API information reference [AutopilotHQ API Documentation](https://autopilot.docs.apiary.io/)

## Usage
Require Intercom:

```node
var autopilot = require('autopilot-node');
```

Create a Autopilot Instance:
#### Using API Key

```node
var autopilot = new Autopilot('apikey', [reqOpts]);
```

## Contacts
### Add/Update Contact

```node
autopilot.contact().add({ email: 'test@example.com'});
```
```node
autopilot.contact().update({ email: 'test@example.com'});
```

### Get Contact

```node
autopilot.contact('test@example.com').get(); // also takes autopilot contact id
```

### Delete Contact

```node
autopilot.contact('test@example.com').delete(); // also takes autopilot contact id
```
