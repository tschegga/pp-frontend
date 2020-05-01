import 'babel-polyfill';
import 'isomorphic-fetch';
import { Base64 } from 'js-base64';

const BACKEND_URL = 'http://localhost:1337';
// TODO: Replace with proper credentials
const basicAuthUser = 'test';
const basicAuthPassword = 'test';

export function fetchData(path) {
    const url = `${BACKEND_URL}${path}`;

    // TODO: Cross-Origin-Header
    return fetch(url, {
        headers: new Headers({
            Authorization: `Basic ${Base64.encode(`${basicAuthUser}:${basicAuthPassword}`)}`,
        }),
    });
}

export function requestLogin() {
    return ({
        username: 'admin',
        userId: 1,
        role: 'ADMIN',
    });
}
