// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { logout } from '../../actions/auth';

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logout());
        },
    };
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

const Profile = (props) => (
    <div className="dropdown profile-element">
        <a data-toggle="dropdown" className="dropdown-toggle">
            <span className="block m-t-xs">
                <strong className="font-bold">{props.user.name}</strong>
             </span>
        </a>
        <ul className="dropdown-menu animated fadeInRight m-t-xs">
            <li><a href="/logout"><FormattedMessage id="login.logout" /></a></li>
        </ul>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
