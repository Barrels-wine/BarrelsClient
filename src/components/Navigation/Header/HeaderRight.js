// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { toggleOffSidebar, toggleSearch } from "../../../actions/ui";

import Notifications from './Notifications';
import NavItem from './NavItem';


const HeaderRight = ({toggleOffSidebar, toggleSearch}) => (
    <ul className="nav navbar-nav navbar-right">
        <NavItem
            onClick={toggleSearch}
            iconClass="icon-magnifier"
        />
        <Notifications />
        <NavItem
            onClick={toggleOffSidebar}
            iconClass="icon-notebook"
        />
    </ul>
);

const mapDispatchToProps = (dispatch) => ({
    toggleOffSidebar: () => dispatch(toggleOffSidebar()),
    toggleSearch: () => dispatch(toggleSearch()),
});

export default connect(null, mapDispatchToProps)(HeaderRight);
