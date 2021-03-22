import React, { useEffect } from 'react';
import AuthAPI from '../../utils/AuthAPI';

let user = {};

let checkForUser = () => {
    console.log('checking user in reducer file')
    AuthAPI.checkForUser()
        .then(res => {
            if (res) {
                user = res;
            } else {
                user = {}
            }
        })
};

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