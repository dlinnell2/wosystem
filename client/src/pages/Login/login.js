import React, { useEffect } from 'react';
import { loginUser, useAuthState, useAuthDispatch } from '../../components/Context';
import AuthAPI from '../../utils/AuthAPI'

const Login = props => {
    const dispatch = useAuthDispatch();
    const user = useAuthState().userDetails;

    const userData = {
        "password": "testpassword",
        "username": "test@test.com"
    }

    useEffect(() => { sendLogin(userData) }, [])

    const sendLogin = async data => {
        let response = await loginUser(dispatch, userData)
        console.log(response)
    }

    return (
        <div>
            <h2>Login page for {user.firstName}</h2>
        </div>
    )
}

export default Login