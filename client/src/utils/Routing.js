import React from 'react';
import { BrowserRouter as Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import { AddWO, WODetail, WOList } from "../pages"

const Routing = props => {

    let children = ["/orders", "/assets", "/users", "/locations"]
    let grandchildren = ["add", "detail/:id", "/"]

    return (
        <Switch>
            {children.map((child) =>
                <Route path={child}>
                    <Switch>
                        <Route path="/orders/add">
                            <AddWO />
                        </Route>
                        <Route path="/orders/detail/:id">
                            <WODetail />
                        </Route>
                        <Route path="/orders">
                            <WOList />
                        </Route>
                    </Switch>
                </Route>

            )}
        </Switch>
    )
}

export default Routing
