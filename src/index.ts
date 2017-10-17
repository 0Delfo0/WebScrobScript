// Include custom styles into the script to be injected into web pages.
// Remove this line to reduce script output size if you do not need styles.
import './index.css';

const Trakt = require('traktapi2'); 

var trakt = new Trakt({
  client_id: '',
  client_secret: '',
  redirect_uri: null, // Defaults to urn:ietf:wg:oauth:2.0:oob,
  user_agent: 'TraktClientNr1', // Defaults to url for this repository
  endpoint: 'http://staging.api.trakt.tv' // Defaults to https://api-v2launch.trakt.tv
});

const who = 'world';
console.log(`Hello ${who}!`);