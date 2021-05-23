import {INCREMENT,DECREMENT} from "../action_types";
export function increment(data){
    return {
        type:INCREMENT,
        data
    }
}
export function decrement(data){
    return {
        type:DECREMENT,
        data
    }
}