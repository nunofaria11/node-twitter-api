# NodeJS Twitter API

[![Heroku](https://heroku-badge.herokuapp.com/?app=node-twitter-api)](https://node-twitter-api.herokuapp.com)

Just a simple personal Twitter API reader implementation.

## Supported API

- `/twitter/favorites/list`
- `/twitter/users/show`

## Install and dependencies
```
npm install
```

This project depends on the following packages:

- [`express`](https://www.npmjs.com/package/express)
- [`dotenv`](https://www.npmjs.com/package/dotenv)
- [`twitter`](https://www.npmjs.com/package/twitter)

## API Keys
The keys are expected to be in the following format:
```
CONSUMER_KEY=XXX
CONSUMER_SECRET=XXX
ACCESS_TOKEN_KEY=XXX
ACCESS_TOKEN_SECRET=XXX
```

You can specify it on a [`dotenv`](https://www.npmjs.com/package/dotenv)-like file **or** in the variables of your deployment environment.