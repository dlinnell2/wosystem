import React, { useEffect } from 'react';
import AuthAPI from '../../utils/AuthAPI';

let user = {}

const checkForUser = async () => {
    let response = await AuthAPI.checkForUser();
    if (response){
        console.log(response);
        user = response.data;
    }
}

checkForUser();

export const initialState = {
    userDetails: user
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                userDetails: action.payload
            };
        case "LOGOUT":
            return {
                ...initialState,
                userDetails: {}
            }
        case "NO_USER":
            return {
                ...initialState,
                userDetails: {}
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};