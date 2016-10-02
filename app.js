var express = require('express');
var app = express();
var Twitter = require('twitter');

require('dotenv').config({
    path: ".config.env",
    silent: true
});


var port = process.env.PORT || 3000;

// Load twitter keys from env
var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get('/', function(req, res) {
    res.send('Sup?');
});

app.get('/twitter/favorites/list', function(req, res) {
	// Access twitter client
    client.get('favorites/list', function(error, tweets, response) {
    	// Send error if occurred
        if (error) {
            res.status(500).send({
                error: error
            });
            return;
        }

        // Respond with data
        if (response.statusCode === 200) {        	
            res.json(tweets);
        } else {
            res.status(500).send({
                error: "Invalid status " + response.statusCode
            });
        }

    });
});

app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!');
});
