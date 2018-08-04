// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroupItem, Badge } from 'reactstrap';

const More  = () => (
    <ListGroupItem action tag="a" href="" onClick={e => e.preventDefault()}>
        <span className="d-flex align-items-center">
            <span className="text-sm">
                <FormattedMessage id="notifications.more" />
            </span>
            <Badge className="ml-auto" color="info">14</Badge>
        </span>
    </ListGroupItem>
);

export default More;
