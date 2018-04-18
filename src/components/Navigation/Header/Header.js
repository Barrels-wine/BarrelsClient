// @flow
import * as React from 'react';
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';

import Notifications from './Notifications';
import Logo from './Logo';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Search from './Search';

const Header  = () => (
    <header className="topnavbar-wrapper">
        <nav role="navigation" className="navbar topnavbar">
            <Logo />
            <div className="nav-wrapper">
                <HeaderLeft />
                <HeaderRight />
            </div>
            <Search />
        </nav>
    </header>
);

export default Header;
