// @flow
import {
    LIST_WINES_SUCCESS,
} from '../actions/cellar';

const INITIAL_STATE: StateType = {
  wines: {},
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LIST_WINES_SUCCESS:
            return { ...state, wines: action.payload.wines };

        default:
            return state;
    }
}
