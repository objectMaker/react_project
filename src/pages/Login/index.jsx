import {Component,Fragment} from "react";
import Form from '../../components/Form'
import './index.less'
export default class Login extends Component{
    render() {
        return (<Fragment>
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
                <Form/>
            </div>
        </Fragment>)
    }
}