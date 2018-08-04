//@flow
import { REHYDRATE } from 'redux-persist';

import { LOGIN_SUCCESS } from '../actions/auth';
import { countBottles } from '../actions/cellar';
import { fetchReferences } from '../actions/references';

export default (store) => (next) => (action) => {
    const result = next(action);

    if (action.type === REHYDRATE || action.type === LOGIN_SUCCESS) {
        if (store.getState().auth.token) {
            store.dispatch(countBottles());
            store.dispatch(fetchReferences());
        }
    }

    return result;
};
