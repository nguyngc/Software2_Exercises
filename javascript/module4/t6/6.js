'use strict';

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async function(evt){
  evt.preventDefault();
  const query = document.querySelector('#query').value;

  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const jsonData = await response.json();
    displayResult(jsonData.result);
  } catch (e) {
    console.log(e.message);
  }
});

function displayResult(jsonData) {
  const results = document.querySelector('#results');
  results.innerHTML = '';

  for (let data of jsonData) {
    let pEle = document.createElement('p');
    pEle.innerHTML = data.value;

    let articleEle = document.createElement('article');
    articleEle.appendChild(pEle);

    results.appendChild(articleEle);
  }
}