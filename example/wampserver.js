const WAMP_SERVER = require('wamp-server');

const SERVER = new WAMP_SERVER({
  port: 8000,
  realms: ['com.example.test']
});
