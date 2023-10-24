#!/usr/bin/node
// Write a script that writes a string to a file.
// import fs
const fs = require('fs');
// get file path
const filePath = process.argv[2];
// get string to write
const stringToWrite = process.argv[3];
// write to the file
fs.writeFile(filePath, stringToWrite, 'utf-8', (err, data) => {
  if (err) { // if error print error
    console.log(err);
  }
});
