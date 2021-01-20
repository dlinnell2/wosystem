import { WODetail, AddWO, WOList } from "../pages";

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
    }
}