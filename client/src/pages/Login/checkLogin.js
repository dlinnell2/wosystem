import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context'

const CheckLogin = props => {
    const dispatch = useAuthDispatch();
    const userDetails = useAuthState();

    useEffect(() => { 
        checkForUser(dispatch)

        console.log(userDetails)
    
    }, []);

    return (
        <div>
            <h2>Check Login page {userDetails.firstName}</h2>
        </div>
    )
}

export default CheckLogin