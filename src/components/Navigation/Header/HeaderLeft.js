// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar, collapseSidebar } from '../../../actions/ui';
import NavItem from './NavItem';

const HeaderLeft = ({ showSidebar, toggleSidebar, collapseSidebar }) => (
    <ul className="navbar-nav mr-auto flex-row">
        <NavItem
            onClick={collapseSidebar}
            iconClass="fa fa-navicon"
            className="d-none d-md-block d-lg-block d-xl-block"
        />
        <NavItem
            onClick={toggleSidebar}
            iconClass="fa fa-navicon"
            className="sidebar-toggle d-md-none"
        />
    </ul>
);

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
    collapseSidebar: () => dispatch(collapseSidebar()),
});

export default connect(null, mapDispatchToProps)(HeaderLeft);
