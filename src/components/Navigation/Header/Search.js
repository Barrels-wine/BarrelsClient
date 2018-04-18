// @flow
import * as React from 'react';
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';

import Notifications from './Notifications';
import Logo from './Logo';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

class Search extends React.Component {
    render() {
        return (
            <form role="search" action="search.html" className="navbar-form">
                <div className="form-group has-feedback">
                    <input type="text" placeholder="Type and hit enter ..." className="form-control" />
                    <div data-search-dismiss="" className="fa fa-times form-control-feedback"></div>
                </div>
                <button type="submit" className="hidden btn btn-default">Submit</button>
            </form>
        );
    }

}

export default Search;
