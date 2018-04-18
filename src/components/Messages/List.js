// @flow
import { connect } from 'react-redux';
import * as React from 'react';

import Message from './Message';
import { dismissMessage } from '../../actions/messages';

const List = ({ messages, dismissMessage }) => (
    <div className="messages">
        {Object.keys(messages).map((date) => {
            const message = messages[date];
            return (
                <Message
                    onDismiss={dismissMessage(message.date)}
                    message={message}
                    key={date}
                />
            );
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        messages: state.messages || {},
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissMessage: (date) => () => {
            dispatch(dismissMessage(date));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
