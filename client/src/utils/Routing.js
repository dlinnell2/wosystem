import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuthState } from '../components/Context';
import routes from "./routeConfig"

const Routing = props => {

    const user = useAuthState();

    return (
        <Switch>
            {Object.values(routes).map((route, i) => {
                if (route.children) {
                    return (
                        <Route path={route.path} key={i}>
                            <Switch>
                                {Object.values(route.children).map((child, i) =>
                                    <Route path={`${route.path}${child.path}`} key={i} render={props => 
                                        user.userDetails ? (
                                        <child.component {...props} />
                                    ) : (
                                    <Redirect to={{pathname:'/login'}} />
                                    )} />
                                )}
                            </Switch>
                        </Route>
                    )
                } else {
                    return <Route path={route.path} key={i} render={props => (
                        <route.component {...props} />
                    )} />
                }
            })}
            <Route path='/*'>
                <Redirect to='/orders' />
            </Route>
        </Switch >
    )
}

export default Routing
