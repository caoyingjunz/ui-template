export const safeguardRoutes = {
    path: '/safeguard',
    name: 'Safeguard',
    component: '/index/index',
    meta: {
        title: 'menus.safeguard.title',
        icon: 'ri:shield-check-line',
        keepAlive: false
    },
    children: [
        {
            path: 'server',
            name: 'SafeguardServer',
            component: '/safeguard/server',
            meta: {
                title: 'menus.safeguard.server',
                icon: 'ri:hard-drive-3-line',
                keepAlive: true
            }
        },
        {
            path: 'audit',
            name: 'SafeguardAudit',
            component: '/safeguard/audit',
            meta: {
                title: 'menus.safeguard.audit',
                icon: 'ri:file-list-3-line',
                keepAlive: true
            }
        }
    ]
};
//# sourceMappingURL=safeguard.js.map