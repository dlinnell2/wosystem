import React from 'react';
import { useAuthState } from '../components/Context'
import { Login } from '../pages'
import { Route } from 'react-router-dom';

export const VerifyUser = ({ children }) => {
    const { userDetails } = useAuthState();
    console.log(userDetails)

    if (Object.keys(userDetails).length > 0) {
        return (
            <>
                {children}
            </>
        )
    } else {
        return (
            <Route path='/login' render={props => (
                <Login {...props} />
            )} />
        )
    }
}