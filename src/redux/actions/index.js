import {LOGIN_ACTION,LOGOUT_ACTION} from "../action_types";
export function login_action(data){
    const {token,username} = data;
    console.log(username);
    localStorage.setItem('token',token)
    localStorage.setItem('username',username)
    localStorage.setItem('islogin',true)
    return {
        type:LOGIN_ACTION,
        data
    }
}
export function logout_action(data){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('islogin')
    return {
        type:LOGOUT_ACTION,
        data
    }
}