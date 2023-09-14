#!/usr/bin/node
const stringNumber = process.argv[2];
let number = Number(stringNumber);
if (!isNaN(number) && (number > 1)) {
  const i = 1;
  let result = 1;
  while (number >= i) {
    result *= number;
    number--;
  }
  console.log(result);
} else {
  console.log('1');
}
