import AuthAPI from '../../utils/AuthAPI';

export async function loginUser(dispatch, data) {
    let response = await AuthAPI.login(data);
    let user = response.data;

    if (user) {
        dispatch({type:"LOGIN_SUCCESS", payload:user});
        return user
    }
}