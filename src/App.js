import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux'
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import './App.css';
import getRoutes from './config/routes';
import translations from './translations';
import Loading from './components/loading';

class App extends React.Component {
  constructor(props: PropsType) {
      super(props);

      this.state = {
          location: undefined,
      };

      if (!this.routeConfig) {
          this.routeConfig = getRoutes(this.props.store);
      }
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
    console.log(translations[locale]);

    return (
        <Provider store={this.props.store}>
            <IntlProvider
                locale={locale}
                messages={translations[locale]}
            >
                <PersistGate loading={<Loading />} persistor={this.props.persistor} >
                    <ConnectedRouter history={this.props.history}>
                        {this.routeConfig}
                    </ConnectedRouter>
                </PersistGate>
            </IntlProvider>
        </Provider>
    );
  }
}

export default App;
