import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { checkForUser } from '../components/Context'

export const VerifyUser = ({ children }) => {

    const verify = async () => {
        let user = await checkForUser();

        if (user) {
            console.log(user)
        } else {
            <Redirect to={{pathname:'/login'}} />
        }
    }

    return (
        <>{children}</>
    )
}