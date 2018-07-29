// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Footer from './Navigation/Footer';
import routesNames from '../config/routesNames';

const NotFound = () => (
    <div className="abs-center wd-xl">
        <div className="text-center mb-4">
            <div className="text-lg mb-3">404</div>
            <p className="lead m-0">
                <FormattedMessage id="not_found.title" />
            </p>
            <p>
                <FormattedMessage id="not_found.subtitle" />
            </p>
        </div>
        <ul className="list-inline text-center text-sm mb-4">
            <li className="list-inline-item">
                <Link to={routesNames.DASHBOARD} className="text-muted">
                    <FormattedMessage id="not_found.dashboard" />
                </Link>
            </li>
            <li className="text-muted list-inline-item">|</li>
            <li className="list-inline-item">
                <Link to="login" className="text-muted">
                    <FormattedMessage id="not_found.login" />
                </Link>
            </li>
        </ul>
        <Footer />
    </div>
);

export default NotFound;
