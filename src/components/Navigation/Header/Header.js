// @flow
import * as React from 'react';

import Logo from './Logo';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Search from './Search';

const Header  = () => (
    <header className="topnavbar-wrapper">
        <nav className="navbar topnavbar">
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
