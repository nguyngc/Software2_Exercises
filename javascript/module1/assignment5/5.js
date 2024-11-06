'use strict';

const target = document.querySelector('#target');
const inputYear = parseInt(prompt('Enter a year:'));

if ((inputYear % 4 === 0 && inputYear % 100 !== 0) ||
    (inputYear % 100 === 0 && inputYear % 400 === 0)) {
  target.innerHTML = `${inputYear} is a leap year.`;
} else {
  target.innerHTML = `${inputYear} is not a leap year.`;
}

