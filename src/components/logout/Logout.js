// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../actions/auth';

class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    }
};

const mapDispatchToProps = (dispatch, { history }) => ({
    logout: dispatch(logout()).then(() => {
        history.push('/login');
    }),
});

export default withRouter(connect(null, mapDispatchToProps)(Logout));
