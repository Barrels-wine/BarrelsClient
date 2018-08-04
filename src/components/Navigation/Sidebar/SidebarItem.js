// @flow
import * as React from 'react';

import { AddWineItem, Header, SubHeader, SubItem, Item } from './Items';
import { isItemActive } from './utils';

const SidebarItem = ({item, open, toggle, currentRoute}) => {
    if (item.type === 'header') {
        return (
            <Header
                item={item}
                key={item.id}
            />
        );
    }

    if (item.type === 'submenu') {
        return (
            <SubItem
                key={item.id}
                item={item}
                open={open}
                toggle={toggle}
                active={isItemActive(item, currentRoute)}
            >
                <SubHeader item={item} key={item.id}/>
                {item.submenu.map((subitem) =>
                    <Item
                        key={subitem.id}
                        item={subitem}
                        active={isItemActive(subitem, currentRoute)}
                    />
                )}
            </SubItem>
        );
    }

    if (item.type === 'add-wine') {
        return (
            <AddWineItem
                item={item}
            />
        );
    }

    return (
        <Item
            key={item.id}
            active={isItemActive(item, currentRoute)}
            item={item}
        />
    );
};

export default SidebarItem;
