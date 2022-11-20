import refs from './refs';
import insertNewHtml from './insert-new-html';
function makeMatchedCountryMarkup(countries) {
  const makeItemMarkup = ({ name, capital, flag, population }) => {
    return `
    <li class="item">
      <h2 class="name">${name}</h2>
      <h3 class="capital">Capital: ${capital}</h3>
      <div class="img-container">
       <img class="img"  src="${flag}" alt="flag"></div>
      <p class="population">Population: ${population}</p>
    </li>`;
  };

  refs.listContainer.innerHTML = '';
  insertNewHtml(countries, makeItemMarkup);
}

export default makeMatchedCountryMarkup;
