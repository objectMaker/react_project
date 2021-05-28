import {Component} from 'react';
import {Button} from 'antd'
import {Redirect} from "react-router-dom";
import {login_action,logout_action} from '../../redux/actions/index'
import {connect} from "react-redux";
class Admin extends Component {
    componentDidMount() {
        if(localStorage.getItem('token')){
            //就将状态维护到redux里面
            this.props.login({
                islogin:true,
                token:localStorage.getItem('token'),
                username:localStorage.getItem('username')
            });
        }
    }
    logout = ()=>{
        this.props.logout({
            islogin:false,
            token:'',
            username:''
        })
    }
    render() {
        if(this.props.state.login.islogin){
            return (
                <div id='zhu'>
                    我是admin组件
                    <Button onClick={this.logout}>我是button</Button>
                </div>
            );
        }else{
            return <Redirect to='/login'/>
        }
    }
}
 Admin = connect(()=>({}),{
    login:login_action,
     logout:logout_action
})(Admin)
export default Admin