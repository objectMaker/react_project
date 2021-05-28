import React,{Component,Fragment} from 'react'
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {login} from "../../api";
import './index.less'
class abc extends Component {
    render() {
            const onFinish =  (values) => {
                message.success('表单验证成功，发送给请求给服务器')
                login(values.username,values.password).then((value)=>{
                    //将状态维护到redux里面
                    this.props.login({
                        token : value.data.token,
                        username : value.data.user.username,
                        islogin : true
                    })
                    this.props.history.push('/admin')
                })
            }
            const onFinishFailed = ({ values, errorFields, outOfDate })=>{
                message.error('输入信息有误，请检查后重新提交')
                console.log('失败了',errorFields);
            }
            return (<Fragment>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed = {onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的用户名!',
                            },
                            {
                                max:12,
                                message:'账户名在12位以下'
                            },
                            {
                                min:5,
                                message:'账户名的长度大于等于5位'
                            },
                            {
                                pattern:/[A-Za-z0-9]/g,
                                message:'账户名必须由数字字母下划线组成'
                            }
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required:true,
                            message:'密码不能为空'
                        },
                            {
                                validator:(_, value) => {
                                 return   /^[1-9a-zA-Z]{5,10}$/.test(value) ? Promise.resolve() :Promise.reject( '只能为数字字母且6-10位')
                                }
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>)
        }
}
export default withRouter(abc)