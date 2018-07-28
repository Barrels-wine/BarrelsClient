// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../Logo';
import routesNames from '../../../config/routesNames';

const HEIGHT = "40px";

const HeaderLogo = () => (
    <div className="navbar-header">
        <Link to={routesNames.DASHBOARD} className="navbar-brand">
            <div className="brand-logo">
                <Logo withText height={HEIGHT} />
            </div>
            <div className="brand-logo-collapsed">
                <Logo height={HEIGHT} />
            </div>
        </Link>
    </div>
);

export default HeaderLogo;
