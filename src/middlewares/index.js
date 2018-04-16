// @flow
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import messages from './messages';
import axios from './axios';
import routing from './routing';
import crashReporter from './crashReporter';

export default (history) => (applyMiddleware(
    thunk,
    messages,
    axios,
    routing(history),
    crashReporter,
));
