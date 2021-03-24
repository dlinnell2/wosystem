import React, { useEffect } from 'react';
import { checkForUser, useAuthState, useAuthDispatch } from '../../components/Context'

const CheckLogin = props => {
    const dispatch = useAuthDispatch();

    useEffect(() => {
        let didCancel = false;
      
        async function userCheck() {
          const response = await checkForUser(dispatch);
          if (!didCancel) { // Ignore if we started fetching something else
            console.log(response);
          }
        }  
      
        userCheck();
        return () => { didCancel = true; }; // Remember if we start fetching something else
      }, []);

    return (
        <div>
            <h2>Check Login page</h2>
        </div>
    )
}

export default CheckLogin