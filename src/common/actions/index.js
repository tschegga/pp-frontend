export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const checkLogin = (username, password) => {
    if (username == 'admin' && password == 'admin') {
        return { loggedIn: true, username: 'admin', rank: 1, sessions: [1,2,3] }
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