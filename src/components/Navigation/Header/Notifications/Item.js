// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListGroupItem } from 'reactstrap';

const Item  = ({ icon, color, title, subtitle }) => (
    <ListGroupItem>
        <div className="media-box">
            <div className="pull-left">
                <i className={`fa fa-${icon} fa-2x text-${color}`} />
            </div>
            <div className="media-box-body clearfix">
                <p className="m0">
                    <FormattedMessage id={title} />
                </p>
                <p className="m0 text-muted">
                    <small>
                        <FormattedMessage id={subtitle} />
                    </small>
                </p>
            </div>
        </div>
    </ListGroupItem>
);

export default Item;
