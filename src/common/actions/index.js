export const LOGIN = 'LOGIN';
<<<<<<< HEAD
export const LOGOUT = 'LOGOUT';

const checkLogin = (username, password) => {
    if (username == 'admin' && password == 'admin') {
        return { loggedIn: true, username: 'admin' }
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
=======

export function doLogin(name) {
    console.log('Do Login');

    return {
        type: LOGIN,
        name: name,
    };
>>>>>>> 8f9e86a117c724d53dceba07c7534028c02970c8
}