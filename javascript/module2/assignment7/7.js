'use strict';

function diceRoll(sideNo) {
  return Math.floor(Math.random() * sideNo) + 1;
}

const sideNo = parseInt(prompt('Enter the number of sides on the dice:'))
const target = document.querySelector('#target');
let ok = false;
while (!ok) {
  let no = diceRoll(sideNo);
  console.log(no);
  target.innerHTML += `<li>${no}</li>`;
  ok = (no === sideNo);
}