// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import menu from '../../../config/menu';
import SidebarItemHeader from './SidebarItemHeader';
import SidebarItem from './SidebarItem';
import SidebarSubItem from './SidebarSubItem';
import SidebarSubHeader from './SidebarSubHeader';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: this.findInitiallyExpandedItems(),
        };
    }

    findInitiallyExpandedItems = () => {
        const expanded = {};
        menu.forEach(item => {
            if (this.isRouteActive(this.getSubRoutes(item))) {
                expanded[item.id] = true;
            }
        })

        return expanded;
    }

    toggleItem = (id) => () => {
        const expanded = {...this.state.expanded};
        expanded[id] = !expanded[id];

        this.setState({
            expanded,
        });
    }

    isRouteActive = (routes) => {
        routes = Array.isArray(routes) ? routes : [routes];
        if (routes.indexOf(this.props.location.pathname) > -1) {
            return true;
        }

        return false;
    }

    getSubRoutes = (item) => {
        if (!item.submenu) {
            return [];
        }

        return item.submenu.map(({route}) => route)
    }

    render() {
        return (
            <aside className='aside-container'>
                <div className="aside-inner">
                    <nav className="sidebar show-scrollbar">
                        <ul className="sidebar-nav">
                            {menu.map((item) => {
                                if (item.type === 'header') {
                                    return (
                                        <SidebarItemHeader
                                            item={item}
                                            key={item.id}
                                        />
                                    );
                                }

                                if (item.type === 'submenu') {
                                    return (
                                        <SidebarSubItem
                                            key={item.id}
                                            item={item}
                                            open={!!this.state.expanded[item.id]}
                                            toggle={this.toggleItem(item.id)}
                                            active={this.isRouteActive(this.getSubRoutes(item))}
                                        >
                                            <SidebarSubHeader item={item} key={item.id}/>
                                            {
                                                item.submenu.map((subitem) =>
                                                    <SidebarItem
                                                        key={subitem.id}
                                                        item={subitem}
                                                        active={this.isRouteActive(subitem.route)}
                                                    />
                                                )
                                            }
                                        </SidebarSubItem>
                                    );
                                }

                                return (
                                    <SidebarItem
                                        key={item.id}
                                        active={this.isRouteActive(item.route)}
                                        item={item}
                                    />
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default withRouter(Sidebar);
