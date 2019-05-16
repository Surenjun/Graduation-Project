import React, { Component } from 'react';
import "../Login/index.css"

import Login from 'ant-design-pro/lib/Login';
import {Alert, message} from 'antd';
import {changeName} from "../redux/action";
const  axios = require("axios");
const { UserName, Password, Mobile, Captcha, Submit } = Login;

class LoginDemo extends Component {
    state = {
        notice: '',
        type: 'tab1',
        autoLogin: true,
    }
    onSubmit = (err, values) => {

        if (this.state.type === 'tab1') {
            this.setState({
                notice: '',
            }, () => {
                if (!err && (values.username !== '请输入账号' || values.password !== '请输入密码')) {
                    console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
                    const name =  values.username,
                        password = values.password,
                        newPassword = values.password2,
                        phone = values.mobile;
                    axios.post('http://surenjun.com:3131/forget',{
                        name,password,newPassword
                    }).then(res =>{
                        const data = res.data;
                        if(data.success){
                            message.success('密码修改成功',1);
                            setTimeout(()=>{
                                const hide  = message.loading('即将跳转到登录页面', 0);
                                setTimeout(()=>{
                                    hide();
                                    this.props.history.push('/Login');
                                },1000)
                            }, 1000);
                        }else{
                            if(data.isReg){
                                message.error('原密码输入不正确！');
                            }else{
                                message.error('用户名不存在！');
                            }
                        }
                    })
                }
            });
        }
    }
    onTabChange = (key) => {
        this.setState({
            type: key,
        });
    }
    changeAutoLogin = (e) => {
        this.setState({
            autoLogin: e.target.checked,
        });
    }
    componentWillMount() {
        const userHeight = document.body.clientHeight + "px";
        document.documentElement.style.setProperty( '--userHeight', userHeight)
    }

    render() {
        return (
            <div id="container-login">
                <Login
                    style={{width:"400px"}}
                    defaultActiveKey={this.state.type}
                    onTabChange={this.onTabChange}
                    onSubmit={this.onSubmit}
                >
                    <div>
                        <p style={{fontSize:"18px",color:"#999"}}>修改账号</p>
                        <UserName name="username" placeholder="请输入账号"/>
                        <Password name="password" placeholder="原密码"/>
                        <Password name="password1" placeholder="新密码"/>
                        <Password name="password2" placeholder="确认新密码"/>
                        <Mobile name="mobile" placeholder="请输入手机号"/>
                        <Captcha placeholder="验证码" onGetCaptcha={() => console.log('Get captcha!')} name="验证码" />
                    </div>
                    <Submit>确认修改</Submit>
                </Login>
            </div>
        );
    }
}

export default LoginDemo
