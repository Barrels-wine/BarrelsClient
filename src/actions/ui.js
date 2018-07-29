// @flow
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const COLLAPSE_SIDEBAR = 'COLLAPSE_SIDEBAR';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';

export const toggleSidebar = () => ({
    type: TOGGLE_SIDEBAR,
});

export const collapseSidebar = () => ({
    type: COLLAPSE_SIDEBAR,
});

export const toggleSearch = () => ({
    type: TOGGLE_SEARCH,
});
