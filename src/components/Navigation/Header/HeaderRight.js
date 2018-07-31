// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { toggleSearch } from '../../../actions/ui';
import { logout } from '../../../actions/auth';

import Notifications from './Notifications';
import NavItem from './NavItem';
import NavItemAdd from './NavItemAdd';

const HeaderRight = ({ logout, toggleSearch }) => (
    <ul className="navbar-nav flex-row">
        <NavItemAdd />
        <NavItem
            onClick={toggleSearch}
            iconClass="icon-magnifier"
        />
        <Notifications />
        <NavItem
            onClick={logout}
            iconClass="icon-logout"
        />
    </ul>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    toggleSearch: () => dispatch(toggleSearch()),
});

export default connect(null, mapDispatchToProps)(HeaderRight);
