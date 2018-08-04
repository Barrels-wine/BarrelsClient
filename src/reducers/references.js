// @flow
import {
    FETCH_REFERENCES_SUCCESS,
} from '../actions/references';

const INITIAL_STATE = {
    varietals: [],
    frenchRegions: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_REFERENCES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
