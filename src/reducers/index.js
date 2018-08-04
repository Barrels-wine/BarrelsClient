// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import cellar from './cellar';
import ui from './ui';
import messages from './messages';
import references from './references';

const reducers = combineReducers({
    auth,
    cellar,
    ui,
    messages,
    form: formReducer,
    references,
});

export default reducers;
