import { WODetail, AddWO, WOList, AddAsset } from "../pages";

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
                path: '/add',
                component: AddAsset
            }
        }
    }
}