var express = require('express');
var app = express();
var Twitter = require('twitter');

/*require('dotenv').config({
    path: ".config_.env"
});*/

// TODO: Load twitter keys from env
var apiKey = process.env.TWITTER_API_KEY;

/*var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});*/

app.get('/', function(req, res) {
    res.send('Hello World! ' + apiKey);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
