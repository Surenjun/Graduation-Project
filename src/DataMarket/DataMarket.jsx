import React, {Component} from 'react';
import { Tabs } from 'antd';
import { Row, Col ,Pagination} from 'antd';
import { Link} from 'react-router-dom'
import "./css.css"
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}

function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}

class DataMarket extends Component {

    render() {
        return (
            <div>

                <Row>
                    <Col span={22} >
                        <p className={"dataNum"}>共找到数据<span className={"redSpan"}>163</span>条</p>
                    </Col>
                </Row>

                <Row type="flex" justify="center">
                    <Col span={17} >
                        <Tabs onChange={callback} type="card">
                            <TabPane tab="全部" key="1">
                                <Row className={"datalist"} justify="space-around">
                                    <Col span={3}>
                                        <img src="https://dfs1.tdata.cn/group1/M00/00/04/rBYDCVt-Tf6AJzj9AAAmFi2bnZ4950.png"/>
                                    </Col>
                                    <Col span={15}>
                                        <h4>
                                            <Link to={"/DataMarket/Detail"}>商品零售数据查询</Link>
                                            <p>提供部分主流电商平台店铺和商品多维分析数据，可用于体验。</p>
                                        </h4>
                                        <Row>
                                            <Col span={6}><p>供应商：天元数据库</p></Col>
                                            <Col span={18}>
                                                交付方式：
                                                <span className="span_app">应用</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={4}>
                                        <div className={"goodsprice"}>
                                            ￥199.00起
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tab="API" key="2">Content of Tab Pane 2</TabPane>
                            <TabPane tab="数据集" key="3">Content of Tab Pane 3</TabPane>
                            <TabPane tab="数据报告" key="4">Content of Tab Pane 4</TabPane>
                            <TabPane tab="数据应用" key="5">Content of Tab Pane 5</TabPane>
                        </Tabs>
                        <Pagination
                            style={{float:'right',marginRight:"30px",marginTop:"30px"}}
                            showQuickJumper
                            defaultCurrent={2}
                            total={500}
                            onChange={onChange}
                        />
                    </Col>

                    <Col span={5} >
                        <div className="int_right_bar">
                            <div className="up_bg">
                                <h4>
                                    快速发布数据需求<br/>
                                    帮你找到合适数据
                                </h4>
                            </div>
                            <Row>
                                <Col span={24}>
                                    <div className="down_icon_list">
                                        <div className="down_icon">
                                            <img src="https://www.tdata.cn/Public/images/common/right_bar_supdemand_icon1.png"/>
                                                <p>快速响应</p>
                                        </div>
                                        <div className="down_icon">
                                            <img src="https://www.tdata.cn/Public/images/common/right_bar_supdemand_icon2.png"/>
                                                <p>全程保障</p>
                                        </div>
                                        <div className="down_icon">
                                            <img src="https://www.tdata.cn/Public/images/common/right_bar_supdemand_icon3.png"/>
                                                <p>委托撮合</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <Row>
                            <Col span={24} >
                                <div className="int_right_bar">
                                    <h4><img src="https://www.tdata.cn/Public/images/int/right_bar_3.png"/>最新供需
                                        <a href="#">更多</a></h4>
                                    <ul style={{padding:0}}>
                                        <li><a href="#"><span>1</span>深圳市公司核名数据</a></li>
                                        <li><a href="#"><span>2</span>唯品会男鞋品牌近期的排名名单</a></li>
                                        <li><a href="#"><span>3</span>各商品品类线上渠道渗透率</a></li>
                                        <li><a href="#"><span>4</span>上市公司环境信息披露指数</a></li>
                                        <li><a href="#"><span>5</span>药品说明书</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className={'int_right_bar'}>
                                <a className={"twe_bar"} href="#">
                                    成为数据推客<br/>日赚万元不是梦
                                </a>
                            </div>
                        </Row>
                        <Row>
                            <div className="int_right_bar">
                                <h4><img src="https://www.tdata.cn/Public/images/int/right_bar_4.png"/>热销数据</h4>
                                <ul style={{padding:0}}>
                                    <li><a href="#"><span>1</span>商品零售数据查询</a></li>
                                    <li><a href="#"><span>2</span>济南市2017年第二季度电商数据分析报告</a>
                                    </li>
                                    <li><a href="#"><span>3</span>2017年7月份企业招中标数据样例</a>
                                    </li>
                                    <li><a href="#"><span>4</span>企业关键字模糊查询</a></li>
                                    <li><a href="#"><span>5</span>数据集、数据报告、数据API个性化定制</a>
                                    </li>
                                    <li><a href="#"><span>6</span>2017年第一季度全国电影排片数据</a>
                                    </li>
                                    <li><a href="#"><span>7</span>2017年7月份电商平台美妆数据（样例）</a>
                                    </li>
                                    <li><a href="#"><span>8</span>企业对外担保信息样例</a>
                                    </li>
                                    <li><a href="#"><span>9</span>空气质量查询</a></li>
                                    <li><a href="#"><span>10</span>无锡市2017年2月各影院票房数据</a>
                                    </li>
                                </ul>
                            </div>
                        </Row>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default DataMarket;