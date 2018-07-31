// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

const SubHeader = ({ item }) => (
    <li className="sidebar-subnav-header">
        <FormattedMessage id={item.label} />
    </li>
);

export default SubHeader;
