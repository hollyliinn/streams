// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'your consumer key',
    consumer_secret: 'your consumer secret',
    access_token_key: 'your access token',
    access_token_secret: 'your access token secret'
  });

  return client;
};

module.exports = Helpers;
