//@flow
import routesNames from './routesNames';

export default [
    {
        id: 'main-header',
        label: 'sidebar.main',
        type: 'header',
    },
    {
        id: 'dashboard',
        label: 'sidebar.dashboard',
        type: 'submenu',
        icon: 'icon-speedometer',
        badge: { value: 3, color: 'success' },
        submenu: [
            {
                id: 'dashboard-1',
                type: 'menu',
                label: 'sidebar.dashboard1',
                route: routesNames.DASHBOARD,
            },
            {
                id: 'dashboard-2',
                type: 'menu',
                label: 'sidebar.dashboard2',
                route: routesNames.NOT_FOUND,
            },
        ]
    },
    {
        id: 'bottles',
        type: 'menu',
        label: 'sidebar.bottles',
        icon: 'icon-grid',
        route: routesNames.NOT_FOUND,
        badge: { value: 30, color: 'success' },
    },
];
