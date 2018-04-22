// @flow
import {
    TOGGLE_SIDEBAR,
    TOGGLE_OFF_SIDEBAR,
    TOGGLE_SEARCH,
} from '../actions/ui';

const INITIAL_STATE = {
    showSidebar: true,
    showOffSidebar: true,
    showSearch: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        case TOGGLE_OFF_SIDEBAR:
            return { ...state, showOffSidebar: !state.showOffSidebar };
        case TOGGLE_SEARCH:
            return { ...state, showSearch: !state.showSearch };
        default:
            return state;
    }
}
