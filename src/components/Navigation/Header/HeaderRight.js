// @flow
import * as React from 'react';
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, Link } from 'react-router-dom';

import Notifications from './Notifications';

// Necessary to create listGroup inside navigation items
class CustomListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.children}
            </ul>
        );
    }
}

class HeaderRight extends React.Component {
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                { /* Search icon */ }
                <li>
                    <a href="#" data-search-open="">
                        <em className="icon-magnifier"></em>
                    </a>
                </li>
                { /* Fullscreen (only desktops) */ }
                <li className="visible-lg">
                    <a href="#" data-toggle-fullscreen="">
                        <em className="fa fa-expand"></em>
                    </a>
                </li>
                { /* START Alert menu */ }
                <NavDropdown
                    noCaret
                    eventKey={3}
                    title={<Notifications/>}
                    className="dropdown-list"
                    id="basic-nav-dropdown"
                >
                    <CustomListGroup>
                        <ListGroupItem href="javascript:void(0)">
                            <div className="media-box">
                                <div className="pull-left">
                                    <em className="fa fa-twitter fa-2x text-info"></em>
                                </div>
                                <div className="media-box-body clearfix">
                                    <p className="m0">New followers</p>
                                    <p className="m0 text-muted">
                                        <small>1 new follower</small>
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem href="javascript:void(0)">
                            <div className="media-box">
                                <div className="pull-left">
                                    <em className="fa fa-envelope fa-2x text-warning"></em>
                                </div>
                                <div className="media-box-body clearfix">
                                    <p className="m0">New e-mails</p>
                                    <p className="m0 text-muted">
                                        <small>You have 10 new emails</small>
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem href="javascript:void(0)">
                            <div className="media-box">
                                <div className="pull-left">
                                    <em className="fa fa-tasks fa-2x text-success"></em>
                                </div>
                                <div className="media-box-body clearfix">
                                    <p className="m0">Pending Tasks</p>
                                    <p className="m0 text-muted">
                                        <small>11 pending task</small>
                                    </p>
                                </div>
                            </div>
                        </ListGroupItem>
                        <ListGroupItem href="javascript:void(0)">
                            <small>More notifications</small>
                            <span className="label label-danger pull-right">14</span>
                        </ListGroupItem>

                    </CustomListGroup>
                </NavDropdown>
                { /* END Alert menu */ }
                { /* START Offsidebar button */ }
                <li>
                    <a href="#" data-toggle-state="offsidebar-open" data-no-persist="true">
                        <em className="icon-notebook"></em>
                    </a>
                </li>
                { /* END Offsidebar menu */ }
            </ul>
        );
    }

}

export default HeaderRight;
