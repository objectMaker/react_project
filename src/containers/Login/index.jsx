import {Component,Fragment} from "react";
import {connect} from "react-redux";
import Form from '../../components/Form'
import {login_action,logout_action} from "../../redux/actions";
import './index.less'
import {Redirect} from "react-router-dom";
class Login extends Component{


    render() {
        if(this.props.islogin) return <Redirect to='/admin'/>
        else return (<Fragment>
            <div className="header">
                <div className="header_left">
                    左边图片
                </div>
                <div className="header_title">
                    商品后台
                </div>
            </div>
            <div className="form">
                <div className="login">登录</div>
                    <Form {...this.props}/>
            </div>
        </Fragment>)
    }
}
export default connect(state=>({islogin:state.login.islogin}),{
    login:login_action,
    logout:logout_action
})(Login)