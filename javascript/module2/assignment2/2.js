'use strict';

const noParticipants = prompt('Enter the number of participants:');
const names = [];
let name = '';
for (let i = 0; i < noParticipants; i++) {
  name = prompt(`Enter the name of participant ${i + 1}:`);
  names.push(name);
}
console.log(names);
const target = document.querySelector('#target');
for (let name of names) {
  target.innerHTML += `<li>${name}</li>`;
}