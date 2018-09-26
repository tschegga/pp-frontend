export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const checkLogin = (username, password) => {
    if (username == 'admin' && password == 'admin') {
        let tmpSessions = [
            {
                time: '2018-09-26T19:30:24+02:00',
                quality: 1,
                length: 10
            },
            {
                time: '2018-09-25T19:30:24+02:00',
                quality: 2,
                length: 15
            },
            {
                time: '2018-09-24T19:30:24+02:00',
                quality: 0,
                length: 5
            },
        ];
        return { loggedIn: true, username: 'admin', rank: 1, sessions: tmpSessions }
    } else {
        return { loggedIn: false };
    }
}

export function doLogin(username, password) {
    const user = checkLogin(username, password);
    return {
        type: LOGIN,
        user
    }
}

export function doLogout() {
    const user = { loggedIn: false };
    return {
        type: LOGOUT,
        user
    }
}