import { WODetail, AddWO, WOList, AddAsset, AssetDetail, AssetList, LocationList, AddLocation, LocationDetail } from "../pages";

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
            add: {
                path: '/add',
                component: AddLocation
            },
            addChild: {
                path: '/add/:id',
                component: AddLocation
            },
            detail: {
                path: '/detail/:id',
                component: LocationDetail
            },
            list: {
                path: '/',
                component: LocationList
            }
        }
    },
}