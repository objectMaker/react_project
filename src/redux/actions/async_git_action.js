import axios from 'axios';
export function asyncGitAction(data){
    return function (dispatch){
        axios.get('https://api.github.com/search/repositories',{
            params:{
                q:data,
                sort:'starts'
            }
        }).then((value)=>{
            dispatch(value)
        })
    }
}