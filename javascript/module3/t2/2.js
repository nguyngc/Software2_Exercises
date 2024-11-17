'use strict';

const target = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];
for (let item of items) {
  let liItem = document.createElement('li');
  liItem.innerText = item;
  target.appendChild(liItem);
}

document.getElementsByTagName('li')[1].className = 'my-item';