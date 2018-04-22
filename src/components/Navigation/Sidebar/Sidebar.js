// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import UserBlock from './UserBlock';

const Sidebar = () => (
    <aside className='aside'>
        <div className="aside-inner">
            <nav className="sidebar">
                <ul className="nav">
                    <UserBlock />
                    { /* Iterates over all sidebar items */ }
                    <li className="nav-heading ">
                        <span>My Cellar</span>
                    </li>
                    <li className="active">
                        <div className="nav-item">
                            <div className="pull-right label label-info">3</div>
                            <em className="icon-speedometer"></em>
                            <span>Dashboard</span>
                        </div>
                        <div>
                            <ul id="dashboard" className="nav sidebar-subnav">
                                <li className="sidebar-subnav-header">Dashboard</li>
                                <li className="active">
                                    <Link to="dashboard" title="Dashboard">
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="tastings" title="Tastings">
                                        <span>Tastings</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
);

export default Sidebar;
