#!/usr/bin/node
// prints the number of movies where the character “Wedge Antilles”

// import request module
const request = require('request');

// The first argument is the api url
const url = process.argv[2];

// Make a request
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  }
  // The title must be displayed in the Star wars film
  const results = JSON.parse(body).results;
  let count = 0;// keeps track of the number of movies
  for (const i in results) {
    const characters = results[i].characters;
    for (const j in characters) {
      if (characters[j].includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
