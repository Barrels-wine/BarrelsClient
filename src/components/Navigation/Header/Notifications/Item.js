// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroupItem } from 'reactstrap';

const Item  = ({ icon, color, title, subtitle }) => (
    <ListGroupItem  action tag="a" href="" onClick={e => e.preventDefault()}>
        <div className="media">
            <div className="align-self-start mr-2">
                <em className={`fa fa-${icon} fa-2x text-${color}`}></em>
            </div>
            <div className="media-body">
                <p className="m-0">
                    <FormattedMessage id={title} />
                </p>
                <p className="m-0 text-muted text-sm">
                    <FormattedMessage id={subtitle} />
                </p>
            </div>
        </div>
    </ListGroupItem>
);

export default Item;
