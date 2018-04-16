// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import cellar from './cellar';
import messages from './messages';

const reducers = combineReducers({
    auth,
    cellar,
    messages,
    routing: routerReducer,
    form: formReducer,
});

export default reducers;
