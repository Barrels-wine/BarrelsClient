// @flow
const getSubRoutes = (item) => {
    if (!item.submenu) {
        return [];
    }

    return item.submenu.map(({route}) => route)
}

const isRouteActive = (routes, current) => {
    routes = Array.isArray(routes) ? routes : [routes];
    if (routes.indexOf(current) > -1) {
        return true;
    }

    return false;
}

const isItemActive = (item, current) => {
    if (item.type === 'subitem') {
        return isRouteActive(getSubRoutes(item));
    }

    return isRouteActive(item.route);
};

const findInitiallyExpandedItems = (menu, current) => {
    const expanded = {};
    menu.forEach(item => {
        if (isRouteActive(getSubRoutes(item), current)) {
            expanded[item.id] = true;
        }
    })

    return expanded;
};

export {
    isItemActive,
    findInitiallyExpandedItems,
};
