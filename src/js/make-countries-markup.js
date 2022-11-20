import refs from './refs';
import insertNewHtml from './insert-new-html';
// PNotify
import { error, defaults } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

/**
 * Функция, которая делает разметку для одной подходящей страны
 */
import makeMatchedCountryMarkup from './make-matched-country';

defaults.delay = 2000;

function makeMarkup(arr) {
  if (arr.length > 10) {
    refs.listContainer.innerHTML = '';
    throwError();
  } else if (arr.length === 1) {
    makeMatchedCountryMarkup(arr);
  } else {
    updateCountriesListMarkup(arr);
  }
}

function updateCountriesListMarkup(countries) {
  const makeListMarkup = ({ name }) => {
    return `<li class="item">
      <h2 class="name">${name}</h2>
    </li>`;
  };

  refs.listContainer.innerHTML = '';
  insertNewHtml(countries, makeListMarkup);
}

function throwError() {
  error({
    text: 'Too many matches found. Please, enter more specific query!',
  });
}

export default makeMarkup;
