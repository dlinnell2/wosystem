import React, { useEffect } from 'react';

export const initialState = {
    userDetails: {},
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log(action.payload)
            return {
                userDetails: action.payload
            };
        case "LOGOUT":
            return {
                userDetails: {}
            }
        case "NO_USER":
            return {
                userDetails: {}
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};