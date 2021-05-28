import axios from 'axios'
import {message} from "antd";

let instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})
instance.interceptors.request.use(function (config){
    return config
})
instance.interceptors.response.use((value)=>{
    console.log(value.data);
    if(value.data.status === 1){
        message.error(value.data.msg)
        return new Promise(()=>{})
    }else{
        return value.data
    }
},(error)=>{
    message.error(error.message)
    return new Promise(()=>{})
})
export default instance;