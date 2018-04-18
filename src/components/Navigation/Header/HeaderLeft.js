// @flow
import * as React from 'react';
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../../actions/ui';

const HeaderLeft = ({ showSidebar, toggleSidebar}) => (
    <ul className="nav navbar-nav">
        <li>
            <button
                onClick={toggleSidebar}
                className="hidden-xs"
            >
                <em className="fa fa-navicon" />
            </button>
        </li>
    </ul>
);

const mapStateToProps = (state) => ({
   showSidebar: state.ui.showSidebar,
});

const mapDispatchToProps = (dispatch) => ({
    toggleSidebar: () => dispatch(toggleSidebar()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLeft);
