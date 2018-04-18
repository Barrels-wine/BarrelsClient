// @flow
import { TOGGLE_SIDEBAR } from '../actions/ui';

const INITIAL_STATE = {
    showSidebar: true,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        default:
            return state;
    }
}
