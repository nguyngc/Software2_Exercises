'use strict';

function isPrimeNumber(inputNumber) {
  let result = true;
  for (let i = 2; i < inputNumber; i++) {
    if (inputNumber % i === 0) {
      result = false;
      break;
    }
  }
  return result;
}

const target = document.querySelector('#target');
const inputNumber = parseInt(prompt('Enter a number:'));
if (isPrimeNumber(inputNumber)) {
  target.innerHTML = `${inputNumber} is a prime number.`;
} else {
  target.innerHTML = `${inputNumber} is not a prime number.`;
}
