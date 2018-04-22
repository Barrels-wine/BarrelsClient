// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';

import './index.css';
import App from './App';
import configureStore from './config/store';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const { store, persistor } = configureStore(history);

ReactDOM.render(
  <App
    store={store}
    persistor={persistor}
    history={history}
  />, document.getElementById('root')
);

registerServiceWorker();
