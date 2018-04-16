// @flow
import jwtDecode from 'jwt-decode';
import { REHYDRATE } from 'redux-persist';

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/auth';

const INITIAL_STATE: StateType = {
  user: null,
  status: null,
  error: null,
  token: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: null, token: null, error: null };
        case LOGIN_SUCCESS:
            const token = action.payload ? action.payload.token : null;
            const tokenData = jwtDecode(token);
            return { ...state, user: tokenData, token: token, error: null };
        case LOGIN_FAILURE:
            return { ...state, user: null, token: null, error: action.error ? action.error.message : null };

        case LOGOUT:
            return {...state, user: null, token: null, error: null };

        case REHYDRATE:
            const auth = action.payload ? action.payload.auth : {};
            return { ...state, ...auth };

        default:
            return state;
    }
}
