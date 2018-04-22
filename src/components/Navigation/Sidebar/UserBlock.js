// @flow
import * as React from 'react';
import user from '../../../img/user.jpg';

const UserBlock = () => (
    <li className="has-user-block">
        <div>
            <div className="item user-block">
                <div className="user-block-picture">
                    <div className="user-block-status">
                        <img src={user} alt="Avatar" width="60" height="60" className="img-thumbnail img-circle" />
                        <div className="circle circle-success circle-lg" />
                    </div>
                </div>
                <div className="user-block-info">
                    <span className="user-block-name">Hello, Mike</span>
                </div>
            </div>
        </div>
    </li>
);

export default UserBlock;
