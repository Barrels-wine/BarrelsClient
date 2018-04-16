// @flow
import * as React from 'react';
import { Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const Message = ({ message, bsClass, onDismiss }) => (
    <Alert
        bsStyle={message.status}
        bsClass={bsClass}
        onDismiss={onDismiss}
        className="m-b-none"
    >
        <div className="container">
            <p className="m-b-none">
                <FormattedMessage id={message.id} values={message.values || {}} />
            </p>
        </div>
    </Alert>
);

export default Message;
