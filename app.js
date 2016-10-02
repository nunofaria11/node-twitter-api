var express = require('express');
var cors = require('cors');
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

var twitterScreenName = process.env.SCREEN_NAME;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on
};

var options = cors(corsOptions);

app.get('/', options, function(req, res) {
    res.send('Sup?');
});

app.get('/twitter/favorites/list', options, function(req, res) {
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

app.get('/twitter/users/show', options, function(req, res) {
    // Access twitter client
    var params = {
        screen_name: twitterScreenName
    };
    client.get('users/show', params, function(error, data, response) {
        // Send error if occurred
        if (error) {
            res.status(500).send({
                error: error
            });
            return;
        }

        // Respond with data
        if (response.statusCode === 200) {
            res.json(data);
        } else {
            res.status(500).send({
                error: "Invalid status " + response.statusCode
            });
        }

    });
});

app.listen(port, function() {
    console.log('Listening on port ' + port + '!');
});
