import React, {Component} from 'react'
import {Col, Menu, Row, Steps,Layout } from "antd"
import { Link } from 'react-router-dom'
import {store} from "../redux/action"
const SubMenu = Menu.SubMenu;
const Step = Steps.Step;
const {
    Header
} = Layout;

class StepNum extends Component {

    render() {
        return (
            <div>
                <Header style={{ height:"40px", zIndex: 1, width: '100%',lineHeight: '40px',backgroundColor:"#f5f5f5"}}>

                    <div id="title">
                        {store.getState() === "您好"?"您好":<span>{store.getState()}</span>}，欢迎来到 <span><Link to={"/"}>Octopus</Link></span>!
                    </div>
                    <Menu
                        mode="horizontal"
                        style={{ lineHeight: '40px' ,backgroundColor:"#f5f5f5"}}
                    >
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
                <Row>
                    <Col span={24} style={{borderBottom:"1px solid #999",padding:"20px 0"}}>
                        <Row>
                            <Col span={10} offset={13}>
                                <Steps current={this.props.num}>
                                    <Step title="确认订单"/>
                                    <Step title="订单支付"/>
                                    <Step title="完成支付"/>
                                </Steps>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default StepNum;
