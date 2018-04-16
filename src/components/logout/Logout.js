// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import routesNames from './../../config/routesNames';

export default () => (
    <Link to={routesNames.LOGOUT}>
        <i className="fa fa-sign-out" /> <FormattedMessage id="login.logout" />
    </Link>
);
