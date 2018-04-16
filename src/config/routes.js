// @flow
import * as React from 'react';
import { Route } from 'react-router';
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
        <Route>
            <Route name={routesNames.LOGIN} path="/login" component={Login} />
            <Route name={routesNames.LOGOUT} path="/logout" onEnter={handleLogout} />
            <Route component={Authenticated}>
                <Route exact path="/" component={Layout}>
                <Route {...createRouteProps(routesNames.DASHBOARD)} path="" component={Dashboard} />
                <Route {...createRouteProps('not_found')} path="*" component={NotFound} />
                </Route>
            </Route>
        </Route>
    );
}
