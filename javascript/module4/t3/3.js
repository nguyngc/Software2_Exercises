'use strict';

// When the form is submitted...
const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', async function(evt) {
  // ... prevent the default action.
  evt.preventDefault();
  // get value of input element
  const query = document.querySelector('#query').value;
  try {                                               // error handling: try/catch/finally
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    displayResult(jsonData);
  } catch (error) {
    console.log(error.message);
  }
});

function displayResult(jsonData) {
  const results = document.querySelector('#results');
  results.innerHTML = '';

  for (let data of jsonData) {
    // show the name in <h2> element
    let h2Ele = document.createElement('h2');
    h2Ele.innerText = data.show.name;

    // show the url in <a> element. Also add target="_blank" to the link.
    let aEle = document.createElement('a');
    aEle.target = '_blank';
    aEle.url = data.show.url;

    // show the medium image with <img src="" alt="">. Add medium image to src attribute and name property to alt attribute.
    // some TV-shows don't have images. This will cause an error. You can fix this by adding ? operator to image property. Example: tvShow.show.image?.medium;. This is called optional chaining.
    let imgEle = document.createElement('img');
    imgEle.src = data.show.image?.medium;
    imgEle.alt = data.show.name;

    // show summary in <div> element (not <p>). This is because the summary is already in <p> element, and the result will not be valid if <p> is inside another <p>.
    let divEle = document.createElement('div');
    divEle.innerHTML = data.show.summary;

    // collect the elements to <article> elements and append <article> elements to the HTML document.
    let articleEle = document.createElement('article');
    articleEle.appendChild(h2Ele);
    articleEle.appendChild(aEle);
    articleEle.appendChild(imgEle);
    articleEle.appendChild(divEle);

    results.appendChild(articleEle);
  }
}
