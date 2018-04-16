// @flow
import * as React from 'react';
import isEqual from 'lodash/isEqual';
import isEqualWith from 'lodash/isEqualWith';
import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';

import menu from '../../config/menu';
import Profile from './Profile';
import MenuItem from './MenuItem';

const getSelectedRouteFromRouter = (router, menu) => {
    for (const item of Object.keys(menu)) {
        const data = menu[item];

        const location = router.createLocation({name: item, params: data.params});

        if (location.pathname === router.location.pathname) {
            // If no query param are specified, matching pathname is good enough
            if (isEmpty(data.query) || isEqualWith(data.query, router.location.query, (dataValue, locationValue) => {
                if (isArray(dataValue) && !isArray(locationValue)) {
                    return isEqual(dataValue, [locationValue]);
                }
                return undefined;
            })) {
                return { name: item, params: data.params };
            }
        }
    }

    return null;
};

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRoute: getSelectedRouteFromRouter(props.router, menu),
        };
    }

    onClickItem = () => (route) => {
      this.setState({
          selectedRoute: route,
      });
    };

    render() {
        return (
            <nav className="navbar-default navbar-static-side">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <Profile />
                            <div className="logo-element">
                                My Cellar
                            </div>
                        </li>
                        {Object.keys(menu).map(route => (
                          <MenuItem
                              key={route}
                              onClick={this.onClickItem}
                              isActive={this.isSelectedNav(route)}
                              route={route}
                              item={menu[route]}
                          />
                        ))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Menu;
