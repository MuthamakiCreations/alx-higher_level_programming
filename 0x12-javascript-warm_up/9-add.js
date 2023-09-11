#!/usr/bin/node
const stringNumber = process.argv[2];
const stringNumber2 = process.argv[3];
const number = Number(stringNumber);
const number2 = Number(stringNumber2);
if (!isNaN(number) && !isNaN(number2)) {
  console.log(number + number2);
} else {
  console.log('NaN');
}
