import React, { useEffect } from 'react';
import AuthAPI from '../../utils/AuthAPI';

let user = useEffect(AuthAPI.checkForUser) ? AuthAPI.checkForUser : "";

export const initialState = {
    userDetails: "" || user,
    errorMessage: null
  };
   
  export const AuthReducer = (initialState, action) => {
    switch (action.type) {
      case "CHECK_LOGIN":
        return {
          ...initialState,
        };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };