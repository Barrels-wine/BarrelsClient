// @flow
import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  CLEAR_MESSAGES,
} from '../actions/messages';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {...action};
            delete message.type;
            if (action.date) {
                return { ...state, [action.date]: message };
            }
            return state;

        case REMOVE_MESSAGE:
            const messageList = { ...state };
            if (action.date) {
                delete messageList[action.date];
            }

            return messageList;

        case CLEAR_MESSAGES:
            return {};

        default:
            return state;
    }
}
