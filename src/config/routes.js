// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router';
import { FormattedMessage } from 'react-intl';

import { logout } from '../actions/auth';
import UserIsAuthenticated from '../config/authWrapper';
import routesNames from './routesNames';
import Layout from '../components/Layout';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import NotFound from '../components/not-found';

const Authenticated = UserIsAuthenticated((props) => props.children);

export default function getRoutes(store) {
    function handleLogout() {
        store.dispatch(logout());
    }

    function createRouteProps(name) {
        return {
            name: name,
            displayName: <FormattedMessage id={'layout.navigation.' + name} />
        };
    }

    return (
        <Switch>
            <Route name={routesNames.LOGIN} path="/login" component={Login} />
            <Route name={routesNames.LOGOUT} path="/logout" onEnter={handleLogout} />
            <Route path="*" render={(props) => (
              <Layout>
                <Switch>
                  <Route {...props} {...createRouteProps(routesNames.DASHBOARD)} path="" component={Dashboard} />
                  <Route {...props} {...createRouteProps('not_found')} path="*" component={NotFound} />
                </Switch>
              </Layout>
            )}/>
        </Switch>
    );
}
