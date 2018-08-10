// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer = (props) => (
    <footer className={props.className || ''}>
        <div className="text-center text-sm text-muted mb-3">
            <FormattedMessage id="footer.legal_warning.consumption" />
            <br />
            <FormattedMessage id="footer.legal_warning.pregnancy" />
        </div>
        <div className="text-center">
            <span className="mr-2">&copy;</span>
            <span>{new Date().getFullYear()}</span>
            <span className="mx-2">-</span>
            <span>Barrels</span>
        </div>
    </footer>
);

export default Footer;
