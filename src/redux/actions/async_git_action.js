import axios from 'axios';
import {ASYNC_GIT_PERSON} from "../action_types";

export function asyncGitAction(data){
    return function (dispatch){
        axios.get('https://api.github.com/search/repositories',{
            params:{
                q:data,
                sort:'starts'
            }
        }).then((value)=>{
            dispatch({
                type:ASYNC_GIT_PERSON,
                data:value.data
            })
        })
    }
}