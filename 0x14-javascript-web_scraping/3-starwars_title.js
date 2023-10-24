#!/usr/bin/node
//  script that prints the title of a Star Wars movie

// import request module
const request = require('request');

// The first argument is the movie ID
const movieId = process.argv[2];

// endpoint URL: https://swapi-api.hbtn.io/api/films/:id
const url = 'https://swapi-api.hbtn.io/api/films/' + movieId;

// Make a request
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  }
  // The title must be displayed in the Star wars film
  console.log(JSON.parse(body).title);
});
