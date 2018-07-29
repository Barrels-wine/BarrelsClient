// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const ContentWrapper = ({ title, subtitle, children}) => (
    <div className="content-wrapper">
        <div className="content-heading">
            <div>
                <FormattedMessage id={title} />
                {subtitle && <small>
                    <FormattedMessage id={subtitle} />
                </small>}
            </div>
        </div>
        {children}
    </div>
);

export default ContentWrapper;
