const _ = require('lodash');
const fetchCountries = _.debounce(searchQuery => {
  const url = `https://restcountries.com/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(console.log)
    .catch(error => console.log(error));
}, 500);

export default fetchCountries;
