'use strict';

function isLeapYear(year) {
  return ((year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0));
}

const target = document.querySelector('#target');
const startYear = parseInt(prompt('Enter a starting year:'));
const endYear = parseInt(prompt('Enter an ending year:'));
let resultHtml = '';

for (let i = startYear; i <= endYear; i++) {
  if (isLeapYear(i)) {
    resultHtml += `<li>${i}</li>`;
  }
}

target.innerHTML = resultHtml;