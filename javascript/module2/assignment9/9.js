'use strict';

function even(arr) {
  let result = [];
  for (let item of arr) {
    if (item % 2 === 0) {
      result.push(item);
    }
  }
  return result;
}

const nums = [2, 7, 4];
const evenNums = even(nums);

console.log(`Original array:`);
console.log(nums);
console.log(`New array:`);
console.log(evenNums);