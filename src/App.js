import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux'
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import Routes from './components/Routes';
import translations from './translations';
import Loading from './components/Loading';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          location: undefined,
      };
  }

  componentDidUpdate(prevState) {
      if (this.state.location && !this.state.location.query.sort) {
          window.scrollTo(0, 0);
      }
  }

  render() {
    addLocaleData([...en, ...fr]);
    let locale = navigator.language.substring(0, 2);

    if (!translations[locale]) {
        locale = 'fr';
    }

    const { store, persistor, history } = this.props;

    return (
        <Provider store={store}>
            <IntlProvider
                locale={locale}
                messages={translations[locale]}
            >
                <PersistGate loading={<Loading />} persistor={persistor} >
                    <ConnectedRouter history={history}>
                        <Routes store={store} />
                    </ConnectedRouter>
                </PersistGate>
            </IntlProvider>
        </Provider>
    );
  }
}

export default App;
