// @flow
import {
    TOGGLE_SIDEBAR,
    COLLAPSE_SIDEBAR,
    TOGGLE_SEARCH,
} from '../actions/ui';

const INITIAL_STATE = {
    showSidebar: true,
    collapseSidebar: false,
    showSearch: false,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, showSidebar: !state.showSidebar };
        case COLLAPSE_SIDEBAR:
            return { ...state, collapseSidebar: !state.collapseSidebar };
        case TOGGLE_SEARCH:
            return { ...state, showSearch: !state.showSearch };
        default:
            return state;
    }
}
