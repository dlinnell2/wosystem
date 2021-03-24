import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context'

const CheckLogin = props => {
    const dispatch = useAuthDispatch();

    useEffect(() => {
        const userCheck = async () => {
            let response = await checkForUser(dispatch);
            console.log(response)
        }; userCheck()
    }, [])

    return (
        <div>
            <h2>Check Login page</h2>
        </div>
    )
}

export default CheckLogin