'use strict';

const nums = [];
let inputNum = 0;
for (let i = 0; i < 5; i++) {
  inputNum = parseInt(prompt(`Enter number ${i + 1}:`));
  nums.push(inputNum);
}
console.log(`Inputted numbers: ${nums}`);

const reverseNums = [];
for (let i = 5; i > 0; i--) {
  reverseNums.push(nums[i - 1]);
}
console.log(`Reversed numbers: ${reverseNums}`);