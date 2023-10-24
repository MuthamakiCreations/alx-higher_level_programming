#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file.

// import request module and fs module
const request = require('request');
const fs = require('fs');

// The first argument is the api url to the request
const url = process.argv[2];

// The second argument the file path to store the body response
const filePath = process.argv[3];

// make https request
request(url, (err, res, data) => {
  if (err) { // prints error occured during reguest
    console.log(err);
  } else {
    // no error, write the response data to the  file
    fs.writeFile(filePath, data, 'utf-8', (err) => {
      if (err) { // if error occurs during write
        console.log(err);
      }
    });
  }
});
