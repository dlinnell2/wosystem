import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context'

const Login = props => {
    const dispatch = useAuthDispatch();

    useEffect(() => { userCheck() }, [])

    const userCheck = () =>{
        console.log('inside async function')
        let response = checkForUser(dispatch);
        console.log(response)
        console.log('login')
    }

    return (
        <div>
            <h2>Login page</h2>
        </div>
    )
}

export default Login