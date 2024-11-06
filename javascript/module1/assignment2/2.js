'use strict';

const target = document.querySelector('#target');
const name = prompt('Type your name.');
target.innerHTML = `Hello, ${name}!`;