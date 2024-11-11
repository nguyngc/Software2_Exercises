'use strict';

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

const target = document.querySelector('#target');
let ok = false;
while (!ok) {
  let no = diceRoll();
  console.log(no);
  target.innerHTML += `<li>${no}</li>`;
  ok = (no === 6);
}