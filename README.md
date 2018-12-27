# autopilothq-node
A node client for the AutopilotHQ API

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
autopilot.contact.add({ email: 'test@example.com'});
```
```node
autopilot.contact.update({ email: 'test@example.com'});
```

### Get Contact

```node
autopilot.contact.get('test@example.com'); // also takes autopilot contact id
```

### Delete Contact

```node
autopilot.contact.delete('test@example.com'); // also takes autopilot contact id
```
