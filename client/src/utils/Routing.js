import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { AddWO, WODetail, WOList } from "../pages"
import routes from "./routeConfig"

const Routing = props => (

    <Switch>
        {Object.values(routes).map((route, i) =>
            <Route path={route.path} key={i}>
                <Switch>
                    {Object.values(route.children).map((child, i) =>
                        <Route path={`${route.path}${child.path}`} key={i} render={props => (
                            <child.component {...props} />
                        )} />
                    )}
                </Switch>
            </Route>


        )}
        <Route path='/'>
            <Redirect to='/orders' />
        </Route>
    </Switch >
)

export default Routing
