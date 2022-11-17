import fetchCountries from './fetch-counries';
const refs = {
  input: document.querySelector('.js-input'),
  listContainer: document.querySelector('.js-country-list'),
};

refs.input.addEventListener('input', event => {
  const inputVal = event.currentTarget.value;
  fetchCountries(inputVal);
});

// function updateCountriesMarkup(countries) {
//   const makeCountryListMarkup = ({ name }) => {
//     return `<li>${name}</li>`;
//   };

//   const makeEachCountryMarkup = countries.map(makeCountryListMarkup).join('');
//   refs.listContainer.insertAdjacentHTML('beforeend', makeEachCountryMarkup);
// }

/**
 * Debounce ->
 * функция вызвалась только тогла когда между потоком ввода в инпут текста
 * есть пауза в 300 мили секунд
 * ! Вместе того чтобы при каждом вводе в инпут у нас отрабатывала эта функция
 */

// const debouncedInputCallback = _.debounce(e => {
//   inputCallbackCounter += 1;

//   outputRef.textContent = `
//     Кол-во вызовов функции : ${inputCallbackCounter},
//     Value: ${e.target.value}
//   `;
// }, 300);

// inputRef.addEventListener('input', debouncedInputCallback);

// const inputRef = document.querySelector('.input');
// const outputRef = document.querySelector('.output');

// let mouseMoveCallbackCounter = 0;

// const throttledFunction = _.throttle(e => {
//   mouseMoveCallbackCounter += 1;

//   outputRef.textContent = mouseMoveCallbackCounter;
// }, 2000);

// window.addEventListener('mousemove', throttledFunction);
