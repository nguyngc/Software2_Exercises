'use strict';

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multi(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

const button = document.getElementById('start');
button.addEventListener('click', function(evt) {
  const calculation = document.getElementById('calculation').value;
  let nums = [];
  let output;
  if (calculation.includes('+')) {
    nums = calculation.split('+');
    output = add(parseInt(nums[0]), parseInt(nums[1]));
  } else if (calculation.includes('-')) {
    nums = calculation.split('-');
    output = sub(parseInt(nums[0]), parseInt(nums[1]));
  } else if (calculation.includes('*')) {
    nums = calculation.split('*');
    output = multi(parseInt(nums[0]), parseInt(nums[1]));
  } else if (calculation.includes('/')) {
    nums = calculation.split('/');
    output = div(parseInt(nums[0]), parseInt(nums[1]));
  }

  const result = document.getElementById('result');
  result.innerHTML = output;
});