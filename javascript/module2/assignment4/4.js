'use strict';

let num;
const nums = [];
while (num !== 0) {
  num = parseInt(prompt('Enter a number:'));
  if (num !== 0) {
    nums.push(num);
  }
}

const reverseNums = nums.sort(function(a, b) {
  return b - a;
});
console.log(reverseNums);