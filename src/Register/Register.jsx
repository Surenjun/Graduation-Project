import React, { Component } from 'react';
import "../Login/index.css"

import Login from 'ant-design-pro/lib/Login';
import { Alert} from 'antd';

const { UserName, Password, Mobile, Captcha, Submit } = Login;

class LoginDemo extends Component {
    state = {
        notice: '',
        type: 'tab1',
        autoLogin: true,
    }
    onSubmit = (err, values) => {
        console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
        if (this.state.type === 'tab1') {
            this.setState({
                notice: '',
            }, () => {
                if (!err && (values.username !== '请输入账号' || values.password !== '请输入密码')) {
                    setTimeout(() => {
                        this.setState({
                            notice: '',
                        });
                    }, 500);
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
        console.log(1);
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
                ><div id="loginLogo" style={{marginTop:"-150px"}}/><div>
                        {
                            this.state.notice &&
                            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
                        }
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
                        <span className="icon icon-alipay" />
                        <span className="icon icon-taobao" />
                        <span className="icon icon-weibo" />

                    </div>
                </Login>
            </div>
        );
    }
}

export default LoginDemo
