import { WODetail, AddWO, WOList, AddAsset, AssetDetail, AssetList, LocationList, UserList, AddUser, CheckLogin, Login } from "../pages";

export default {
    orders: {
        path: '/orders',
        children: {
            add: {
                path: '/add',
                component: AddWO
            },
            detail: {
                path: '/detail/:id',
                component: WODetail
            },
            list: {
                path: '/',
                component: WOList
            }
        }
    },
    assets: {
        path: '/assets',
        children: {
            add: {
                path: '/add',
                component: AddAsset
            },
            detail: {
                path: '/detail/:id',
                component: AssetDetail
            },
            list: {
                path: '/',
                component: AssetList
            }
        }
    },
    locations: {
        path: '/locations',
        children: {
            list: {
                path: '/:id',
                component: LocationList
            },
            listTopLevel: {
                path: '/',
                component: LocationList
            }
        }
    },
    user: {
        path: '/users',
        children: {
            add: {
                path: '/add',
                component: AddUser
            },
            list: {
                path: '/',
                component: UserList
            }
        }
    },
    checklogin: {
        path: '/checklogin',
        component: CheckLogin
    },
    login: {
        path: '/login',
        component: Login
    }
}