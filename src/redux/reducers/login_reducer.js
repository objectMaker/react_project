import {LOGIN_ACTION,LOGOUT_ACTION} from "../action_types";
let initState = {
    islogin:false,
    username:'',
    token:''
};
export default function login_reducer(preState=initState,action){
    let {type,data} = action;
    console.log(data);
    let newState;
    switch (type){
        case LOGIN_ACTION:{
            newState = Object.assign(data,{})
            return {
                islogin:true,
                username:data.username,
                token:data.token
            }
        }
        case LOGOUT_ACTION:{
            newState = {
                islogin:false,
                username:'',
                token:''
            }
            return newState;
        }
        default :{
            return preState;
        }
    }
}