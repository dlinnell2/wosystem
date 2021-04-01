import { WODetail, AddWO, WOList, AddAsset, AssetDetail, AssetList, LocationList, UserList, AddUser, Login } from "../pages";

export default {
    orders: {
        path: '/orders',
        children: {
            add: {
                path: '/add',
                permissions: ["Manager", "Technician", "Requester"],
                component: AddWO
            },
            detail: {
                path: '/detail/:id',
                permissions: ["Manager", "Technician", "Requester"],
                component: WODetail
            },
            list: {
                path: '/',
                permissions: ["Manager", "Technician", "Requester"],
                component: WOList
            }
        }
    },
    assets: {
        path: '/assets',
        children: {
            add: {
                path: '/add',
                permissions: ["Manager", "Technician", "Requester"],
                component: AddAsset
            },
            detail: {
                path: '/detail/:id',
                permissions: ["Manager", "Technician", "Requester"],
                component: AssetDetail
            },
            list: {
                path: '/',
                permissions: ["Manager", "Technician", "Requester"],
                component: AssetList
            }
        }
    },
    locations: {
        path: '/locations',
        children: {
            list: {
                path: '/:id',
                permissions: ["Manager", "Technician", "Requester"],
                component: LocationList
            },
            listTopLevel: {
                path: '/',
                permissions: ["Manager", "Technician", "Requester"],
                component: LocationList
            }
        }
    },
    user: {
        path: '/users',
        children: {
            add: {
                path: '/add',
                permissions: ["Manager", "Technician", "Requester"],
                component: AddUser
            },
            list: {
                path: '/',
                permissions: ["Manager", "Technician", "Requester"],
                component: UserList
            }
        }
    },
    login: {
        path: '/login',
        component: Login
    }
}