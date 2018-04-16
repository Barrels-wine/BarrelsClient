// @flow
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

export const SUCCESS = 'success';
export const DANGER = 'danger';
export const INFO = 'info';

export const dismissMessage = (date) => ({
    type: REMOVE_MESSAGE,
    date: date,
});

export const clearMessages = () => ({
    type: CLEAR_MESSAGES
});

export const message = (
    status,
    id,
    values = {},
    dismissAfter = 60000,
    clear = false,
    listItems = []
) => {
    return (dispatch) => {
        const message = {
            type: ADD_MESSAGE,
            status,
            date: new Date().getTime().toString(),
            id,
            values,
            listItems,
        };

        if (clear) {
            dispatch(clearMessages());
        }

        if (dismissAfter) {
            setTimeout(() => {
                dispatch(dismissMessage(message.date));
            }, dismissAfter);
        }

        dispatch(message);
    };
}
