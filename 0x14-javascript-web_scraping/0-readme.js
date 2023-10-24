#!/usr/bin/node
// script that reads and prints the content of a file.
// import fs
const fs = require('fs');
// get file path
const filePath = process.argv[2];
// read file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) { // if error print error
    console.log(err);
  } else { // if no error print data
    console.log(data);
  }
});
