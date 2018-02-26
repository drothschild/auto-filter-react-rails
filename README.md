# README
A simple app that filters a list of people. Rails 5.1 backend and React 16 client.
## Installing Locally

First, you must install dependencies and setup the Postgres database:

```sh
cd client && npm install && cd .. && bundle install
bin/rake db:setup
```

## Running App

To launch the app:
```sh
bin/rake start
```

## Testing the App

There are two sets of tests, one for the rails api, one for the React front end.
To run the api tests:
```sh
bundle/exec rspec
```
To run the client tests:
```sh
cd client && npm run test