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
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  let output;
  switch (operation) {
    case 'add':
      output = add(num1, num2);
      break;
    case 'sub':
      output = sub(num1, num2);
      break;
    case 'multi':
      output = multi(num1, num2);
      break;
    case 'div':
      output = div(num1, num2);
      break;
    default:
      break;
  }

  const result = document.getElementById('result');
  result.innerHTML = output;
});