'use strict';

function concat(arr) {
  let result = '';
  for (let item of arr) {
    result += item;
  }
  return result;
}

const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
const target = document.querySelector('#target');
target.innerHTML = concat(names);