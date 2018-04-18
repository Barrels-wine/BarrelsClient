// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import isAuthenticated from '../config/auth';

const SecureRoute = ({ render, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated
            ? render(props)
            : <Redirect to='/login' />
    )} />
);

const mapStateToProps = (state) => {
  const auth = state.auth;

  return {
      isAuthenticated: isAuthenticated(auth),
      user: auth.user,
  }
};

export default connect(mapStateToProps)(SecureRoute);
