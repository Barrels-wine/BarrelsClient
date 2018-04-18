// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../actions/auth';
import routesNames from '../config/routesNames';

class Logout extends React.Component {
    componentWillMount() {
        this.props.logout();
    }

    render() {
        return (
            <Redirect to={routesNames.DASHBOARD} />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
