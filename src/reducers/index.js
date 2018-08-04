// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import cellar from './cellar';
import ui from './ui';
import references from './references';

const reducers = combineReducers({
    auth,
    cellar,
    ui,
    form: formReducer,
    references,
});

export default reducers;
