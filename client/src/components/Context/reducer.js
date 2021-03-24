import React, { useEffect } from 'react';

export const initialState = {
    userDetails: {},
    userPresent: false,
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            const newState = {...initialState};
            newState.userDetails=action.payload;
            newState.userPresent=true;
            console.log(newState)
            return {
                newState
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