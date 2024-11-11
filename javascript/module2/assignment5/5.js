'use strict';

let isExist = false;
const nums = [];
while (!isExist) {
  let num = parseInt(prompt('Enter a number:'));
  isExist = nums.includes(num);
  if (!isExist) {
    nums.push(num);
  } else {
    alert(`The number ${num} has already been given!`);
  }
}

const sortedNums = nums.sort(function(a, b) {
  return a - b;
});
console.log(sortedNums);