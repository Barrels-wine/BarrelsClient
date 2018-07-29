//@flow
import routesNames from './routesNames';

export default [
    {
        id: 'main-header',
        label: 'sidebar.header',
        type: 'header',
    },
    {
        id: 'cellar',
        label: 'sidebar.cellar.header',
        type: 'submenu',
        icon: 'icon-speedometer',
        badge: { value: 3, color: 'danger' },
        submenu: [
            {
                id: 'wines',
                type: 'menu',
                label: 'sidebar.cellar.wines',
                route: routesNames.DASHBOARD,
            },
            {
                id: 'bottles',
                type: 'menu',
                label: 'sidebar.cellar.bottles',
                route: routesNames.NOT_FOUND,
            },
        ]
    },
    {
        id: 'settings',
        type: 'menu',
        label: 'sidebar.settings',
        icon: 'icon-grid',
        route: routesNames.NOT_FOUND,
        badge: { value: 30, color: 'danger' },
    },
];
