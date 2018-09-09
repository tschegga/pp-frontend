export const LOGIN = 'LOGIN';

export function doLogin(name) {
    console.log('Do Login');

    return {
        type: LOGIN,
        name: name,
    };
}