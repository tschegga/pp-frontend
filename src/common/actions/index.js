
const checkLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
        const tmpSessions = [
            {
                time: '2018-09-26T19:30:24+02:00',
                quality: 1,
                length: 10,
            },
            {
                time: '2018-09-25T19:30:24+02:00',
                quality: 2,
                length: 15,
            },
            {
                time: '2018-09-24T19:30:24+02:00',
                quality: 0,
                length: 5,
            },
        ];
        return {
            loggedIn: true,
            isFetching: false,
            username: 'admin',
            rank: 1,
            sessions: tmpSessions,
        };
    }

    // else
    return { loggedIn: false, isFetching: false };
};

export const LOGIN = 'LOGIN';
export function doLogin(username, password) {
    const user = checkLogin(username, password);
    return {
        type: LOGIN,
        user,
    };
}

export const LOGOUT = 'LOGOUT';
export function doLogout() {
    const user = { loggedIn: false };
    return {
        type: LOGOUT,
        user,
    };
}

function receiveUser(json) {
    return json;
}

export const REQUEST_SIGNUP = 'REQUEST_SIGNUP';
function requestSignup(username, password) {
    return {
        type: REQUEST_SIGNUP,
        username,
        password,
    };
}

export const SIGNUP = 'SIGNUP';
export function doSignup(username, password) {
    return {
        type: SIGNUP,
        username,
        password,
    };
}

export function fetchSignup(username, password) {
    return function (dispatch) {
        dispatch(requestSignup(username, password));

        return fetch('http://localhost:1337')
            .then(
                response => response.json(),
                error => console.log(error),
            )
            .then(
                json => dispatch(receiveUser(json)),
            );
    };
}
