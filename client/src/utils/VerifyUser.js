import React from 'react';
import { useAuthState } from '../components/Context'
import { Login } from '../pages'
import { Route, Switch, Redirect } from 'react-router-dom';
import { UserPages } from '../components/UserPages'

export const VerifyUser = props => {
    const { userDetails } = useAuthState();
    console.log(userDetails);

    return userDetails ? (<UserPages {...props} />) : (<Redirect to={{pathname:'/login'}} />)
}