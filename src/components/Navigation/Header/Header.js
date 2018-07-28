// @flow
import * as React from 'react';

import HeaderLogo from './HeaderLogo';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import Search from './Search';

const Header  = () => (
    <header className="topnavbar-wrapper">
        <nav className="navbar topnavbar">
            <HeaderLogo />
            <HeaderLeft />
            <HeaderRight />
            <Search />
        </nav>
    </header>
);

export default Header;
