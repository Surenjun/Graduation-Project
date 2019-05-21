import React, { Component } from 'react';
import "../Login/index.css"

import Login from 'ant-design-pro/lib/Login';
import {Icon, message} from 'antd';
import {connect} from "react-redux";
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
                    const name =  values.username,
                          password = values.password,
                          phone = values.mobile;
                    axios.post('http://surenjun.com:3131/register',{
                        name,password,phone
                    }).then(res =>{
                        const data = res.data;
                        if(data.sameName){
                            message.error('该用户名已经被注册');
                        }
                        if(data.success){
                            message.success('注册成功',1);
                            setTimeout(()=>{
                                const hide  = message.loading('页面即将跳转到主页', 0);
                                setTimeout(()=>{
                                    hide();
                                    sessionStorage.setItem('userName',data.name);
                                    this.props.history.push('/');
                                },1000)
                            }, 1000);
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
                        <p style={{fontSize:"18px",color:"#999"}}>账号注册</p>
                        <UserName name="username" placeholder="请输入账号"/>
                        <Password name="password" placeholder="密码"/>
                        <Password name="password1" placeholder="确认密码"/>
                        <Mobile name="mobile" placeholder="请输入手机号"/>
                        <Captcha placeholder="验证码" onGetCaptcha={() => console.log('Get captcha!')} name="验证码" />
                </div>
                    <Submit>注册</Submit>
                    <div>
                        其他注册方式
                        <span id="icon">
                             <Icon type="alipay-circle" id="alipay"/>
                             <Icon type="weibo-circle" id="weibo"/>
                             <Icon type="wechat" id="wechat"/>
                         </span>
                    </div>
                </Login>
            </div>
        );
    }
}
LoginDemo = connect()(LoginDemo)
export default LoginDemo
