import refs from './refs';

const insertNewHtml = (countries, func) => {
  const makeEachItemMarkup = countries.map(func).join('');
  refs.listContainer.insertAdjacentHTML('beforeend', makeEachItemMarkup);
};

export default insertNewHtml;
