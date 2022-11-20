import makeMarkup from './make-countries-markup';
import fetchCountries from './fetch-counries';
const _ = require('lodash');

const debounceCallback = _.debounce(event => {
  const inputVal = event.srcElement.value;
  console.log(inputVal);
  fetchCountries(inputVal).then(data => {
    makeMarkup(data);
  });
}, 500);

export default debounceCallback;
