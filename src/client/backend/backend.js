import 'babel-polyfill';
import 'isomorphic-fetch';
const BACKEND_URL = 'http://localhost:1337';

export function fetchData(path) {
    let url = `${BACKEND_URL}${path}`;

    //TODO: Cross-Origin-Header
    return fetch(url)
        .then(response => response.json())
        .catch(ex => {
            console.error('Parsing failed', ex);
        });
}
