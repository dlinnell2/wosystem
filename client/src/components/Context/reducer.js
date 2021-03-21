import React, { useEffect } from 'react';
import AuthAPI from '../../utils/AuthAPI';

let user = {};

useEffect(() => { checkForUser() }, []);

const checkForUser = () => {
    AuthAPI.checkForUser()
        .then(res => {
            if (res) {
                user = res;
            }
        })
}

export const initialState = {
    userDetails: user,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "CHECK_LOGIN":
            checkForUser().then(() => {
                return {
                    ...initialState,
                };
            });
        case "LOGIN_SUCCES":
            return {
                userDetails: action.payload
            };
        case "LOGOUT":
            return {
                userDetails: {}
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};