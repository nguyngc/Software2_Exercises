'use strict';

const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const p = document.querySelector('p[id=target]');

const form = document.querySelector('form[id=source]');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  p.innerText = `Your name is ${firstName.value} ${lastName.value}`;
});