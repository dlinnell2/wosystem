import React from 'react';
import { useAuthState } from '../components/Context'
import { Login } from '../pages'
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserPages } from '../components/UserPages'

export const VerifyUser = ({ children }) => {
    const { userDetails } = useAuthState();
    console.log(userDetails)

    return (
        <Switch>
           <Route
            path={'/login'}
            render = {props => 
                <Login {...props} />
            }
            />
            <Route
            path={'/*'}
            render={props => 
                /* Object.keys(userDetails).length > 1 ?(
                    <UserPages {...props} />
                ) : (
                    <Redirect to={{pathname: '/login'}} />
                ) */
                <UserPages {...props} />
            } />
        </Switch>
    )
}