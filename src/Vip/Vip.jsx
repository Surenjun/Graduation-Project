import React, {Component} from 'react';
import "./css.css"
import "../Header/Header.css"
import { Layout, Menu ,Tabs ,Row, Col} from "antd"
import { Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const {
    Header
} = Layout;

class Vip extends Component {

    render() {
        return (
            <div>
                <Header style={{ height:"40px", zIndex: 1, width: '100%',lineHeight: '40px',backgroundColor:"#f5f5f5"}}>

                    <div id="title">
                        您好，欢迎来到 <span><Link to={"/"}>Octopus</Link></span>!
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
                <div className="c-person-header" id="c_maijia_uc_header">
                    <Row type="flex" justify="center">
                        <Col span={17}>
                            <div className="inner">
                                <div className="header-logo clearfix">
                                    <div className="fl tt">
                                        个人中心<br/>
                                        <span className="ln">User Center</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" justify="center">
                    <Col span={17}>
                        <div className="card-container">
                            <Tabs type="card">
                                <TabPane tab="会员功能" key="1">
                                    <div className="smy">
                                        hi~ zzzzzsss，您已开启<span className="l">3</span>项会员功能，高于<span
                                        className="l">45.3%</span>的用户
                                    </div>
                                    <Row type="flex" justify="center" className="meal-info">
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/amazon.png" alt=""/>
                                            <h3>Amazon工具</h3>
                                            <h4>有效期：永久</h4>
                                            <div className="btn cur">立即使用</div>
                                        </Col>
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/data.png" alt=""/>
                                            <h3>数据定制</h3>
                                            <h4>有效期：永久</h4>
                                            <div className="btn cur">立即查看</div>
                                        </Col>
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/bbs.png" alt=""/>
                                            <h3>卖家资讯</h3>
                                            <h4>有效期：永久</h4>
                                            <div className="btn cur">进去逛逛</div>
                                        </Col>
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/wish-c.png" alt=""/>
                                            <h3>Wish数据套餐</h3>
                                            <h4>有效期：未定购</h4>
                                            <div className="btn">立即购买</div>
                                        </Col>
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/ebay-c.png" alt=""/>
                                            <h3>Amazon数据套餐</h3>
                                            <h4>有效期：未定购</h4>
                                            <div className="btn">立即购买</div>
                                        </Col>
                                        <Col span={4} style={{textAlign: 'center'}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/wish-c.png" alt=""/>
                                            <h3>eBay数据套餐</h3>
                                            <h4>有效期：未定购</h4>
                                            <div className="btn">立即购买</div>
                                        </Col>
                                    </Row>

                                    <Row  className="meal-info">
                                        <Col span={4} style={{textAlign: 'center',marginTop:"50px"}}>
                                            <img src="//cdn.maijia.com/www-activity/pages/user/vip/img/xy-c.png" alt=""/>
                                            <h3>卖家学院线下会员</h3>
                                            <h4>有效期：未定购</h4>
                                            <div className="btn">立即购买</div>
                                        </Col>
                                    </Row>

                                </TabPane>
                                <TabPane tab="卖家学院" key="2">
                                    卖家学院
                                </TabPane>
                                <TabPane tab="我报名的课程" key="3">
                                    我报名的课程
                                </TabPane>
                                <TabPane tab="卖家资讯" key="4">
                                    卖家资讯
                                </TabPane>
                                <TabPane tab="收藏管理" key="5">
                                    收藏管理
                                </TabPane>
                                <TabPane tab="订阅管理" key="6">
                                    订阅管理
                                </TabPane>
                                <TabPane tab="投稿管理" key="7">
                                    投稿管理
                                </TabPane>
                            </Tabs>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Vip;
