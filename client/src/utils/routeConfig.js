import { WODetail, AddWO, WOList, AddAsset, AssetDetail, AssetList } from "../pages";

export default  {
    orders: {
        path: '/orders',
        children: {
            add: {
                path:'/add',
                component: AddWO
            },
            detail: {
                path:'/detail/:id',
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
                path:'/add',
                component: AddAsset
            },
            detail: {
                path:'/detail/:id',
                component: AssetDetail
            },
            list: {
                path: '/',
                component: AssetList
            }
        }
    }
}