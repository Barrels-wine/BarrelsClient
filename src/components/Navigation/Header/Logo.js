// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const Logo = () => (
    <div className="navbar-header">
        <a href="/dashboard" className="navbar-brand">
            <div className="brand-logo">
                <span>
                    <i className="fa fa-wine-glass mr-sm" />
                    {' '}
                    <FormattedMessage id="layout.title" />
                </span>
            </div>
            <div className="brand-logo-collapsed">
                <i className="fa fa-wine-glass" />
            </div>
        </a>
    </div>
);

export default Logo;
