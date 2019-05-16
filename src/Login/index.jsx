import React, { Component } from 'react';
import "./index.css"

import Login from 'ant-design-pro/lib/Login';
import {Alert, Checkbox, message ,Icon} from 'antd';
import { Link } from 'react-router-dom'
import {store ,changeName} from "../redux/action"
import { connect } from 'react-redux'
const  axios = require("axios");
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
          const name =  values.username,
                password = values.password;
          axios.post('http://surenjun.com:3131/login',{
            name ,password
          }).then(res =>{
            const data = res.data;
            console.log(data);
            if(data.success){
              message.success('登录成功',1);

              setTimeout(()=>{
                const hide  = message.loading('即将跳转到主页', 0);
                setTimeout(()=>{
                  hide();
                  this.props.dispatch(changeName(data.name))
                  this.props.history.push('/');
                },1000)
              }, 1000);
              console.log(data);
            }else{
              data.isReg ? message.error('用户名或者密码错误') : message.error('用户名不存在');
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

           {/*<div id="loginLogo"/>*/}

           <Login
               style={{width:"400px"}}
               defaultActiveKey={this.state.type}
               onTabChange={this.onTabChange}
               onSubmit={this.onSubmit}
           >
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
               <a style={{ float: 'right' }} href="/ForgetUser">忘记密码?</a>
             </div>
             <Submit>登录</Submit>
             <div>
               其他登录方式
               <span id="icon">
                 <Icon type="alipay-circle" id="alipay"/>
                 <Icon type="weibo-circle" id="weibo"/>
                 <Icon type="wechat" id="wechat"/>
               </span>
               <Link to={"/Register"} style={{ float: 'right'}}>立即注册</Link>
             </div>
           </Login>
         </div>
    );
  }
}
LoginDemo = connect()(LoginDemo)
export default LoginDemo
