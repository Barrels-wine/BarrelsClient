// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroupItem } from 'reactstrap';

const More  = () => (
    <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
        <span className="d-flex align-items-center">
            <span className="text-sm">
                <FormattedMessage id="notifications.more" />
            </span>
            <span className="badge badge-success ml-auto">14</span>
        </span>
    </ListGroupItem>
);

export default More;
