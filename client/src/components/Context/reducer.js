import React, { useEffect } from 'react';
import AuthAPI from '../../utils/AuthAPI';

let user = {};

let checkUser = new Promise ( (resolve, reject) => {
    AuthAPI.checkForUser()
        .then(res => {
            console.log(res)
            if (res.data) {
                user = res.data;
                resolve();
            } else {
                user = {}
                resolve();
            }
        })
});

export const initialState = {
    userDetails: user,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "CHECK_LOGIN":
            checkUser.then(() => {
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