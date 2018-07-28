// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroupItem } from 'reactstrap';

const More  = () => (
    <ListGroupItem>
        <small>
            <FormattedMessage id="notifications.more" />
        </small>
        <span className="label label-danger pull-right">14</span>
    </ListGroupItem>
);

export default More;
