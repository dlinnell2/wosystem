import React, { useEffect } from 'react';

export const initialState = {
    userDetails: {}
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