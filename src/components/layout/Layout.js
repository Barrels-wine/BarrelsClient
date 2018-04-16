// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Messages from '../messages';
import Menu from '../navigation';
import routesNames from '../../config/routesNames';

const Layout = ({ children }) => (
    <div id="wrapper">
        <Messages />
        {/* <Menu /> */}

        <div id="page-wrapper" className="gray-bg">
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                          <Link to={routesNames.LOGOUT}>
                              <i className="fa fa-sign-out" /> <FormattedMessage id="login.logout" />
                          </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-lg-10">
                    {children && children.props.displayName &&
                        <h2>{children.props.displayName}</h2>
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
