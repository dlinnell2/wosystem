import React, { useEffect } from ' react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context'

const Login = props => {
    const dispatch = useAuthDispatch();

    useEffect(() => { userCheck() }, [])

    const userCheck = async () =>{
        let response = await checkForUser(dispatch);
        console.log(response)
    }

    return (
        <div>
            <h2>Login page</h2>
        </div>
    )
}