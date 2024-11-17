'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');
for (let name of names) {
  let liElement = document.createElement('li');
  liElement.innerText = name;
  target.appendChild(liElement);
}
