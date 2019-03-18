import React, { Component } from 'react';
import "./index.css"

import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

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
           ><div id="loginLogo">

           </div>
             <Tab key="tab1" tab="账号密码登录">
               {
                 this.state.notice &&
                 <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
               }
               <UserName name="username" placeholder="请输入账号"/>
               <Password name="password" placeholder="密码"/>
             </Tab>
             <Tab key="tab2" tab="手机登录">
               <Mobile name="mobile" placeholder="请输入手机号"/>
               <Captcha placeholder="验证码" onGetCaptcha={() => console.log('Get captcha!')} name="验证码" />
             </Tab>
             <div>
               <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>记住密码</Checkbox>
               <a style={{ float: 'right' }} href="#">忘记密码?</a>
             </div>
             <Submit>登录</Submit>
             <div>
               其他登录方式
               <span className="icon icon-alipay" />
               <span className="icon icon-taobao" />
               <span className="icon icon-weibo" />
               <a style={{ float: 'right' }} href="">立即注册</a>
             </div>
           </Login>
         </div>
    );
  }
}

export default LoginDemo
