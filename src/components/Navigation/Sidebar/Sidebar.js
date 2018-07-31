// @flow
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import menu from '../../../config/menu';
import SidebarItem from './SidebarItem';
import { findInitiallyExpandedItems } from './utils';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: findInitiallyExpandedItems(menu, props.location.pathname),
        };
    }

    toggleItem = (id) => () => {
        const expanded = {...this.state.expanded};
        expanded[id] = !expanded[id];

        this.setState({
            expanded,
        });
    }

    render() {
        return (
            <aside className='aside-container'>
                <div className="aside-inner">
                    <nav className="sidebar show-scrollbar">
                        <ul className="sidebar-nav">
                            {menu.map((item) => (
                                <SidebarItem
                                    key={item.id}
                                    item={item}
                                    open={!!this.state.expanded[item.id]}
                                    toggle={this.toggleItem(item.id)}
                                    currentRoute={this.props.location.pathname}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default withRouter(Sidebar);
