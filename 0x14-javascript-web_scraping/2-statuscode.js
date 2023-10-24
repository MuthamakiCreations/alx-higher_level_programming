#!/usr/bin/node
// script that display the status code of a GET request.

// import request module
const request = require('request');
// The first argument is the URL to request (GET)
const url = process.argv[2];
// request module to do HTTP request
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    // Print the response status code if a response was received
    console.log('code:', response.statusCode);
  }
});
