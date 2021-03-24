import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context';
import AuthAPI from '../../utils/AuthAPI'

const Login = props => {
    const dispatch = useAuthDispatch();

    const userData = {
        "password": "testpassword",
        "username": "test@test.com"
    }

    useEffect(() => { sendLogin(userData) }, [])

    const sendLogin = data => {
        AuthAPI.login(data)
        .then(res => {
            console.log(res)
        })
    }

    return (
        <div>
            <h2>Login page</h2>
        </div>
    )
}

export default Login