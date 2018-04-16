// @flow
import * as React from 'react';
import { FormGroup, Button, Alert } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';

const FORM_NAME = 'login';

const Form = ({ handleSubmit, error, submitting, login }) => (
    <div className="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <h2><FormattedMessage id="login.title" /></h2>
            <p><FormattedMessage id="login.subtitle" /></p>
            <form>
                <FormGroup controlId="formBasicText">
                    // @TODO add fields
                    {error && <Alert bsStyle="danger">{error}</Alert>}
                    <Button onClick={handleSubmit(login)} disabled={submitting} type="submit" bsStyle="primary" className="full-width"><FormattedMessage id="login.login" /></Button>
                </FormGroup>
            </form>
        </div>
    </div>
);

export default reduxForm({
    form: FORM_NAME,
})(Form);
