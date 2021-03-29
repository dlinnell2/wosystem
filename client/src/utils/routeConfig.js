import { WODetail, AddWO, WOList, AddAsset, AssetDetail, AssetList, LocationList, UserList, AddUser, Login } from "../pages";

export default {
    orders: {
        path: '/orders',
        children: {
            add: {
                path: '/add',
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: AddWO
            },
            detail: {
                path: '/detail/:id',
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: WODetail
            },
            list: {
                path: '/',
                private: true,
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
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: AddAsset
            },
            detail: {
                path: '/detail/:id',
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: AssetDetail
            },
            list: {
                path: '/',
                private: true,
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
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: LocationList
            },
            listTopLevel: {
                path: '/',
                private: true,
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
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: AddUser
            },
            list: {
                path: '/',
                private: true,
                permissions: ["Manager", "Technician", "Requester"],
                component: UserList
            }
        }
    }
}