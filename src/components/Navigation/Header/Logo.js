// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const Logo = () => (
    <div className="navbar-header">
        <a href="#" className="navbar-brand">
            <div className="brand-logo">
                <em className="fa fa-glass" />
                <FormattedMessage id="layout.title" />
            </div>
            <div className="brand-logo-collapsed">
                <em className="fa fa-glass" />
            </div>
        </a>
    </div>
);

export default Logo;
