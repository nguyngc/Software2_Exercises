'use strict';

const target = document.querySelector('#target');
const noOfDice = parseInt(prompt('Enter number of dice:'));
const sumOfNumber = parseInt(prompt('Enter sum of the number of eyes:'));

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function rollingDice(dices, sum) {
  let total = 0;
  for (let i = 1; i <= dices; i++) {
    total += getRandomInt(6);
  }
  return total === sum;
}

let count = 0;
const rollingTimes = 10000;
for (let i = 0; i < rollingTimes; i++) {
  if (rollingDice(noOfDice, sumOfNumber)) {
    count++;
  }
}

const probability = Number.parseFloat(count * 100 / rollingTimes).toFixed(2);
target.innerHTML = `Probability to get sum ${sumOfNumber} with ${noOfDice} dice is ${probability}%`;