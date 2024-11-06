'use strict';

const num1 = parseInt(prompt('Number 1:'));
const num2 = parseInt(prompt('Number 2:'));
const num3 = parseInt(prompt('Number 3:'));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

document.querySelector(
    '#sum').innerHTML = `${num1} + ${num2} + ${num3} = ${sum}`;
document.querySelector(
    '#product').innerHTML = `${num1} * ${num2} * ${num3} = ${product}`;
document.querySelector(
    '#average').innerHTML = `(${num1} + ${num2} + ${num3}) / 3 = ${average}`;