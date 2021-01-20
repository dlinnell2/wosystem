import React from 'react';
import { BrowserRouter as Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { AddWO, WODetail, WOList } from "../pages"
import routes from "./routeConfig"

const Routing = props => {

    let children = ["/orders", "/assets", "/users", "/locations"]
    let grandchildren = ["/add", "/detail/:id", "/"]


    return (
        <Switch>
            {Object.keys(routes).map((route, i) => {
                console.log(routes.route)
                return (
                    < Route path={route.path} key={i} >
                        <Switch>
                            {console.log(route.children)}
                            {Object.keys(route.children).map((child, i) =>
                                <Route path={`${route.path}${child.path}`}>
                                    <child.component />
                                </Route>
                            )}
                        </Switch>
                    </Route>
                )

            })}
        </Switch >
    )
}

export default Routing
