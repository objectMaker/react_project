import instance from "./instance";
import qs from 'querystring'

export function login(username,password){
    return instance.post('/login',qs.stringify({
        username,
        password
    }))
}