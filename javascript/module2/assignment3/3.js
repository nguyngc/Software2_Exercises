'use strict';

const dogs = [];
let dog = '';
for (let i = 0; i < 6; i++) {
  dog = prompt(`Enter dog ${i + 1} name:`);
  dogs.push(dog);
}
console.log(dogs);

const target = document.querySelector('#target');
dogs.sort().reverse();
for (let dog of dogs) {
  target.innerHTML += `<li>${dog}</li>`;
}