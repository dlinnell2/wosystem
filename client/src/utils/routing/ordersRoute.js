import React from "react"
import { WOList } from '../../pages/Orders'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom"

const OrdersRoute = props => {

    let { params } = useParams();
    console.log(params)
    return (
        <WOList />
    )
}

export default OrdersRoute