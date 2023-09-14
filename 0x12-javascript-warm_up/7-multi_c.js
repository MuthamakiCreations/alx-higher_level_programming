#!/usr/bin/node
const stringNumber = process.argv[2];
const number = Number(stringNumber);
if (!isNaN(number)) {
  let i = 0;
  while (i < number) {
    console.log('C is fun');
    i++;
  }
} else if (isNaN(number)) {
  console.log('sbhufufun');
}
