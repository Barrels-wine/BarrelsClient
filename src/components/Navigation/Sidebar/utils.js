// @flow
import isArray from 'lodash/isArray';

const getSubRoutes = (item) => {
    if (!item.submenu) {
        return [];
    }

    return item.submenu.map(({route}) => route);
}

const isRouteActive = (routes, current) => {
    routes = isArray(routes) ? routes : [routes];

    return routes.indexOf(current) > -1;
}

const isItemActive = (item, current) => {
    if (item.type === 'submenu') {
        return isRouteActive(getSubRoutes(item), current);
    }

    return isRouteActive(item.route, current);
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
