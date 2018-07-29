// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Logo';
import routesNames from '../../../config/routesNames';

const HeaderLogo = () => (
    <div className="navbar-header">
        <Link to={routesNames.DASHBOARD} className="navbar-brand">
            <div className="brand-logo">
                <Logo withText />
            </div>
            <div className="brand-logo-collapsed">
                <Logo />
            </div>
        </Link>
    </div>
);

export default HeaderLogo;
