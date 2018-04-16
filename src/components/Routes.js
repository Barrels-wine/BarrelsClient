// @flow
import * as React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import UserIsAuthenticated from '../config/authWrapper';
import routesNames from '../config/routesNames';
import { Layout, PageLayout } from '../components/layout';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Logout from '../components/logout';
import NotFound from '../components/NotFound';

const Authenticated = UserIsAuthenticated((props) => props.children);

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
                    path={routesNames.LOGIN}
                    render={(props) => (<Login {...props} />)}
                  />
                  <Route
                    path={routesNames.LOGOUT}
                    render={(props) => (<Logout {...props} />)}
                  />
                  <Route
                    path={routesNames.NOT_FOUND}
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
                            <Route
                              path={routesNames.DASHBOARD}
                              render={(props) => <Dashboard {...props} />}
                            />
                            <Redirect to={routesNames.DASHBOARD} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    );
};

export default withRouter(Routes);
