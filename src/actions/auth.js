// @flow
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (formValues) => ({
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE],
    payload: {
        request: {
            url: 'login',
            method: 'POST',
            data: formValues,
        },
    },
});

export const logout = () => ({
  types: LOGOUT,
});
