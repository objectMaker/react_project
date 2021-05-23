import {ASYNC_GIT_PERSON} from "../action_types";
let initState = [];
export default function (preState=initState,action){
    let {type,data} = action;
    let nowState;
    switch (type){
        case ASYNC_GIT_PERSON:{
            nowState = preState;
            return nowState;
        }
        default :{
            return preState;
        }
    }

}