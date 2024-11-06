'use strict';

const target = document.querySelector('#target');
const answer = confirm('Should I calculate the square root?');

if (answer) {
  const inputNumber = parseInt(prompt('Enter a number:'));
  if (inputNumber < 0) {
    target.innerHTML = `The square root of a negative number is not defined.`;
  } else {
    let result = Math.sqrt(inputNumber);
    target.innerHTML = `&Sqrt;${inputNumber} = ${result}`;
  }
} else {
  target.innerHTML = 'The square root is not calculated.';
}
