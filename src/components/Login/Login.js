// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Form from './Form';
import Logo from '../Logo';

const Login = (props) => (
    <div className="abs-center wd-xl login">
        <div className="d-flex justify-content-center">
            <div className="p-2">
                <Logo
                    thumbnail
                    round
                    color="primary"
                    bgColor="white"
                    borderColor="primary"
                />
            </div>
        </div>
        <div className="card b0">
            <div className="card-body">
                <h1 className="text-center text-primary py-2">
                    <FormattedMessage id="login.title" />
                </h1>
                <Form />
            </div>
        </div>
    </div>
);

export default Login;
