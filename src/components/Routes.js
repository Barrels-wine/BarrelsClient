// @flow
import * as React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SecureRoute from './SecureRoute';
import routesNames from '../config/routesNames';
import { Layout, PageLayout } from '../components/Layout';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import Logout from '../components/Logout';
import NotFound from '../components/NotFound';
import WinesList from '../components/Wines';

const simpleLayoutPages = [
    routesNames.LOGIN,
    routesNames.LOGOUT,
    routesNames.NOT_FOUND,
];

const Routes = ({location}) => {
  if(simpleLayoutPages.indexOf(location.pathname) > -1) {
      return (
          <PageLayout>
              <Switch location={location}>
                  <Route
                    path={`${process.env.PUBLIC_URL}${routesNames.LOGIN}`}
                    render={(props) => (<Login {...props} />)}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}${routesNames.LOGOUT}`}
                    render={(props) => (<Logout {...props} />)}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}${routesNames.NOT_FOUND}`}
                    render={(props) => (<NotFound {...props} />)}
                  />
              </Switch>
          </PageLayout>
      )
  }

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };
  const animationName = 'rag-fadeIn';
  return (
        <Layout>
            <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Switch location={location}>
                            <SecureRoute
                                exact
                                path={`${process.env.PUBLIC_URL}${routesNames.DASHBOARD}`}
                                render={(props) => <Dashboard {...props} />}
                            />
                            <SecureRoute
                                path={`${process.env.PUBLIC_URL}${routesNames.WINES}`}
                                render={(props) => <WinesList {...props} />}
                            />
                            <Redirect to={`${process.env.PUBLIC_URL}${routesNames.NOT_FOUND}`} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    );
};

export default withRouter(Routes);
