// @flow
import {
    LOADING,
    FAILURE_END_LOADING,
    LIST_WINES_SUCCESS,
    GET_WINE_SUCCESS,
    COUNT_BOTTLES_SUCCESS,
} from '../actions/cellar';

const INITIAL_STATE = {
  wines: [],
  loading: false,
  count: 0,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true};
        case LIST_WINES_SUCCESS:
            return {
                ...state,
                wines: action.payload.entities.wines || {},
                loading: false,
            };
        case COUNT_BOTTLES_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
            };
        case GET_WINE_SUCCESS:
            const wines = {
                ...state.wines,
                ...(action.payload.entities.wines || {}),
            };

            return {
                ...state,
                wines,
                count: state.count + 1,
            };
        case FAILURE_END_LOADING:
            return {...state, loading: false};

        default:
            return state;
    }
}
