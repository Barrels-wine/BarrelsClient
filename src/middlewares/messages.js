//@flow
import { LOCATION_CHANGE } from 'connected-react-router';
import { clearMessages } from '../actions/messages';

export default () => (next) => (action) => {
    if (action.type === LOCATION_CHANGE) {
        const result = next(action);
        next(clearMessages());
        return result;
    }

    return next(action);
};
