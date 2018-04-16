// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const Loading = (props) => (
    <div className={`loading ${props.compact ? 'compact' : ''}`}>
        <div className="spinner" />
        <FormattedMessage id="common.loading" />
    </div>
);

Loading.defaultProps = {
    compact: false,
};

export default Loading;
