// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../../actions/ui';
import NavItem from './NavItem';

const HeaderLeft = ({ showSidebar, toggleSidebar}) => (
    <ul className="nav navbar-nav">
        <NavItem
            onClick={toggleSidebar}
            iconClass="fa fa-bars"
            className="sidebar-toggle"
        />
    </ul>
);

const mapStateToProps = (state) => ({
   showSidebar: state.ui.showSidebar,
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeft);
