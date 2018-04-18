// @flow
import * as React from 'react';
import Form from './Form';
import avatar from '../../img/user.jpg';

const Login = () => (
    <div className="abs-center wd-xl">
        <div className="p">
            <img src={avatar}
                 alt="Avatar"
                 width="60"
                 height="60"
                 className="img-thumbnail img-circle center-block"
            />
        </div>
        <div className="panel widget b0">
            <div className="panel-body">
                <Form />
            </div>
        </div>
    </div>
);

export default Login;
