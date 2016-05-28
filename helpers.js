// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
    // TODO: This is super insecure.
    // Move to environemtal variables.
    var client = new Twitter ({
        consumer_key: 'Y2HlV60F4flZu17m8z37OiC80',
        consumer_secret: '0QRofawbHbknH5LCYThYaRBB4JgHCCyGvhWIiJGpVTkjzgqCT0',
        access_token_key: '3989024547-GzmerWhc0egOdPlqUWe5e4cEPczCyIQkpdhhEO3',
        access_token_secret: 'n4qEVU9xGcRPQmL8xemmPgyRKBH7RvMcO7KpdBhDZE5H3'
    });
    
    return client;
};

module.exports = Helpers;