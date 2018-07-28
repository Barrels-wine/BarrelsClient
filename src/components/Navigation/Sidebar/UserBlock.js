// @flow
import * as React from 'react';
import user from '../../../img/user.jpg';

const UserBlock = () => (
    <div>
        <div className="item user-block">
            <div className="user-block-picture">
                <div className="user-block-status">
                    <img src={user} alt="Avatar" width="60" height="60" className="img-thumbnail rounded-circle" />
                    <div className="circle bg-success circle-lg" />
                </div>
            </div>
            <div className="user-block-info">
                <span className="user-block-name">Hello, Mike</span>
                <span className="user-block-role">Dev</span>
            </div>
        </div>
    </div>
);

export default UserBlock;
