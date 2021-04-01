import AuthAPI from '../../utils/AuthAPI';

export async function loginUser(dispatch, data) {
    let response = await AuthAPI.login(data);
    let user = response.data;

    if (user) {
        dispatch({type:"LOGIN_SUCCESS", payload:user});
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }
}

export async function checkForUser(dispatch) {
    let response = await AuthAPI.checkForUser();
    let user = response.data;

    if (user) {
        dispatch({type:"LOGIN_SUCCESS", payload:user});
        return user;
    } else {
        return null;
    }

}