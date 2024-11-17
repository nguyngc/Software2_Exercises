'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.querySelector('#target');
for (let student of students) {
  let optElement = document.createElement('option');
  optElement.value = student.id;
  optElement.text = student.name;
  target.appendChild(optElement);
}
