import "./Header.css"
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu  } from "antd"

import {store} from "../redux/action"
const SubMenu = Menu.SubMenu;
const {
    Header
} = Layout;
class Head extends Component {
    componentDidMount() {
        console.log(store.getState());
    }

    render() {
        return (
            <div>
                <Header style={{ height:"40px", zIndex: 1, width: '100%',lineHeight: '40px',backgroundColor:"#f5f5f5"}}>
                    <div id="title">
                        {store.getState() === "您好"?"您好":<span>{store.getState()}</span>}, 欢迎来到 <span>Octopus</span>!
                    </div>
                    <Menu
                        mode="horizontal"
                        style={{ lineHeight: '40px' ,backgroundColor:"#f5f5f5"}}
                    >
                        <Menu.Item key="1">
                            <Link to={"/Login"}>登录</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={"/Register"}>注册</Link>
                        </Menu.Item>
                        <SubMenu style={{float:'right'}} title={<span className="submenu-title-wrapper">
                            消息</span>}>
                            <Menu.Item key="setting:1">站内消息</Menu.Item>
                            <Menu.Item key="setting:2">系统消息</Menu.Item>
                        </SubMenu>
                        <SubMenu style={{float:'right'}} title={<span className="submenu-title-wrapper">
                            个人中心</span>}>
                            <Menu.Item key="setting:3"><Link to={"/Vip"}>会员功能</Link></Menu.Item>
                            <Menu.Item key="setting:4"><Link to={"/Record"}>购买记录</Link></Menu.Item>
                            <Menu.Item key="setting:5"><Link to={"/Person"}>个人设置</Link></Menu.Item>
                        </SubMenu>
                    </Menu>

                </Header>
                <Header style={{  height: '100px' ,zIndex: 1, width: '100%',backgroundColor:"#fff"}}>
                    <div className="logo">
                        <img src="../img/logo-1.png" alt=""/>
                    </div>
                    <Menu
                        mode="horizontal"
                        style={{ lineHeight: '100px' ,backgroundColor:"#fff"}}
                    >
                        <Menu.Item key="5"><Link to={"/"}>首页</Link></Menu.Item>
                        <Menu.Item key="6"><Link to={"/Summary"}>全站概括</Link></Menu.Item>
                        <Menu.Item key="7"><Link to={"/shopResult"}>查店品</Link></Menu.Item>
                        <Menu.Item key="8"><Link to={"/News"}>咨询中心</Link></Menu.Item>
                        <Menu.Item key="9"><Link to={"/DataCustomization"}>数据定制</Link></Menu.Item>
                        <Menu.Item key="10"><Link to={"/DataMarket"}>数据市场</Link></Menu.Item>
                        <Menu.Item key="11"><Link to={"/About"}>关于我们</Link></Menu.Item>
                    </Menu>
                </Header>
            </div>

        );
    }
}

export default Head;
