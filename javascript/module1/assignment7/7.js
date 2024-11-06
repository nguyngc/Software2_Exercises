'use strict';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

const target = document.querySelector('#target');
const diceRolls = parseInt(prompt('Enter number of dice rolls:'));

if (diceRolls > 0) {
  let sum = 0;
  let diceNo = 0;
  let resultMsg = '';
  for (let i = 1; i <= diceRolls; i++) {
    diceNo = getRandomInt(6);
    resultMsg += `${diceNo} ` + (i !== diceRolls ? `+ ` : ``);
    sum += diceNo;
  }

  target.innerHTML = `${resultMsg} = ${sum}`;
}