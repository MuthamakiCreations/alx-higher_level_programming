#!/usr/bin/node
//  script that computes the number of tasks completed by user id.

// import request module
const request = require('request');

// The first argument is the api url to the request
const url = process.argv[2];

// Make a request that prints the completed tasks
request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const todos = JSON.parse(body);
    const completed = {};// keeps track of completed tasks
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].completed) { // checks if current task is completed
        if (completed[todos[i].userId] === undefined) {
          completed[todos[i].userId] = 1;
        } else {
          completed[todos[i].userId] += 1;
        }
      }
    }
    console.log(completed);
  }
});
