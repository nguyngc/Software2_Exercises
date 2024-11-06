'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const target = document.querySelector('#target');
const name = prompt('Type student\'s name.');
const groupNo = getRandomInt(4);
let group = '';

switch (groupNo) {
  case 1:
    group = 'Gryffindor';
    break;
  case 2:
    group = 'Slytherin';
    break;
  case 3:
    group = 'Hufflepuff';
    break;
  case 4:
    group = 'Ravenclaw';
    break;
  default:
    break;
}

target.innerHTML = `${name}, you are ${group}.`;
