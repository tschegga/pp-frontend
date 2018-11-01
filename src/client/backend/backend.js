import 'babel-polyfill';
import 'isomorphic-fetch';

const BACKEND_URL = 'http://localhost:1337';

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
};

export function fetchData(path) {
    const url = `${BACKEND_URL}${path}`;

    // TODO: Cross-Origin-Header
    return fetch(url)
        .then(handleErrors)
        .then(response => response.json())
        .catch((err) => {
            // TODO: proper error handling
            console.error(err); // eslint-disable-line no-console
        });
}

export function requestLogin() {
    return ({
        username: 'admin',
        userId: 1,
        role: 'ADMIN',
    });
}
