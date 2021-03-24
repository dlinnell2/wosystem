import AuthAPI from '../../utils/AuthAPI';

export async function checkForUser(dispatch) {
    let response = await AuthAPI.checkForUser();
    response.data ? dispatch({ type: "LOGIN_SUCCESS", payload: response.data }) : dispatch({ type: "NO_USER" });
}