#!/usr/bin/node
const stringNumber = process.argv[2];
const number = Number(stringNumber);
if (!isNaN(number)) {
  console.log('My number:', number);
} else {
  console.log('Not a number');
}
