import refs from './refs';
import debounceCallback from './debounce-callback';

refs.input.addEventListener('input', debounceCallback);
