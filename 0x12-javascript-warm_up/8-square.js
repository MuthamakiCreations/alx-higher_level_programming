#!/usr/bin/node
const stringNumber = process.argv[2];
const number = Number(stringNumber);
if (!isNaN(number)) {
  let i = 0;
  while (i < number) {
    let j = 0;
    while (j < number) {
      if (j === (number - 1)) {
        console.log('X');
        break;
      }
      process.stdout.write('X' + '');
      j++;
    }
    i++;
  }
} else if (isNaN(number)) {
  console.log('Missing size');
}
