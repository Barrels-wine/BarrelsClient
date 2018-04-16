// @flow
import * as React from 'react';

import Logout from './logout';
import Messages from '../components/messages';
import Navigation from '../components/navigation';

const Layout = ({ children, router, routes, params }: PropsType) => (
    <div id="wrapper">
        <Messages />
        <Navigation router={router} />

        <div id="page-wrapper" className="gray-bg">
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <Logout />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    {children && children.props.route.displayName &&
                        <h2>{children.props.route.displayName}</h2>
                    }
                </div>
            </div>
            <div className="wrapper wrapper-content">
                {children}
            </div>
        </div>
    </div>
);

export default Layout;
