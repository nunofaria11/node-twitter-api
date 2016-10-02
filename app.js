var express = require('express');
var app = express();

require('dotenv').config({
	path: ".config.env"
});

// TODO: Load twitter keys from env
var apiKey = process.env.TWITTER_API_KEY;

app.get('/', function(req, res) {
    res.send('Hello World! ' + apiKey);
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
