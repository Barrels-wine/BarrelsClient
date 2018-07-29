//@flow
import routesNames from './routesNames';

export default [
    {
        id: 'main-header',
        label: 'sidebar.header',
        type: 'header',
    },
    {
        id: 'dashboard',
        type: 'menu',
        label: 'sidebar.dashboard',
        icon: 'icon-speedometer',
        route: routesNames.DASHBOARD,
    },
    {
        id: 'cellar',
        label: 'sidebar.cellar.header',
        type: 'submenu',
        icon: 'icon-speedometer',
        submenu: [
            {
                id: 'wines',
                type: 'menu',
                label: 'sidebar.cellar.wines',
                route: routesNames.WINES,
                badge: { path: 'cellar.count', color: 'danger' },
            },
        ]
    },
];
