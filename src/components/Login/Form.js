//@flow
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import routesNames from '../../config/routesNames';
import { handleApiError } from '../../config/api';
import { login } from '../../actions/auth';
import { PasswordField, TextField } from '../Fields/Fields';

const FORM_NAME = 'login';

const Form = ({ handleSubmit, error, submitting, login }) => (
    <form>
        <TextField name="username" label="login.username" />
        <PasswordField name="password" label="login.password" />

        <div className="clearfix">
            <div className="pull-right">
                <Button
                    to="dashboard"
                    bsStyle="primary"
                    bsSize="sm"
                    onClick={handleSubmit(login)}
                >
                    <FormattedMessage id="login.submit" />
                </Button>
            </div>
        </div>
    </form>
);

const mapDispatchToProps = (dispatch, { location, history }) => {
    return {
        login: (values) => {
            return dispatch(login(values)).then(() => {
                const redirectUrl = location.query ? location.query.redirect : null;
                history.push(redirectUrl && redirectUrl !== routesNames.LOGOUT ? redirectUrl : routesNames.DASHBOARD);
            }).catch((action) => {
                handleApiError(action);
            });
        },
    };
};

export default withRouter(connect(null, mapDispatchToProps)(reduxForm({
    form: FORM_NAME,
})(Form)));
