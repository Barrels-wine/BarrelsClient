// @flow
import * as React from 'react';
import { FormGroup, Button, Alert } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { handleApiError } from '../../config/api';
import { login } from '../../actions/auth';

const FORM_NAME = 'login';

const Form = ({ handleSubmit, error, submitting, login }) => (
    <form role="form">
        <div className="form-group has-feedback">
            <input id="exampleInputPassword1" type="password" placeholder="Password" className="form-control" />
            <span className="fa fa-lock form-control-feedback text-muted" />
        </div>
        <div className="clearfix">
            <div className="pull-left mt-sm">
                <Link to="recover" className="text-muted">
                    <small>Forgot your password?</small>
                </Link>
            </div>
            <div className="pull-right">
                <Link to="dashboard" className="btn btn-sm btn-primary">Unlock</Link>
            </div>
        </div>
    </form>
);

const mapDispatchToProps = (dispatch, { location, history }) => {
    return {
        login: (values) => {
            return dispatch(login(values)).then(() => {
                const redirectUrl = location.query.redirect;
                history.push(redirectUrl && redirectUrl !== '/logout' ? redirectUrl : '/dashboard');
            }).catch((action) => {
                handleApiError(action);
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(reduxForm({
    form: FORM_NAME,
})(Form));
