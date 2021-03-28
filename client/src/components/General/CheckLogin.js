import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../Context'

const CheckLogin = ({ children }) => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();

    useEffect(() => { verifyLogin() }, [])

    const verifyLogin = async () => {
        let user = await checkForUser(dispatch);
        if (user) {
            console.log(user.email)
        }
    }
    
    return (
        <>{children}</>
    )
}

export default CheckLogin