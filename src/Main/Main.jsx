import React, {Component} from 'react';
import {Carousel, Col, Icon, Row } from "antd";
import Slider from "../Slider/Slider";

import asyncComponent from "../Tools/AsyncHighChart.js";
const HighChart = asyncComponent(() => import("../HighChart/HighChart"));

class Main extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <Slider/>
                    </Col>
                    <Col span={20}>
                        <Carousel autoplay>
                            <div><h1 style={{color:'#fff'}}>专业的电商数据分析平台</h1></div>
                            <div/>
                            <div/>
                            <div/>
                        </Carousel>
                    </Col>
                </Row>
                <div id="advance-panel">
                    <div className="title-col">
                        <h2>核心优势</h2>
                        <h5>因为专业，所以更值得被信赖</h5>
                    </div>
                    <div className="core">
                        <ul className="advance clearfix">
                            <li className="advance-item">
                                <div className="advance-icon">
                                    <img src="//cdn.taosj.com/data-www-activity/pages/default/img/zhenghechuli.png" alt=""/>
                                </div>
                                <div className="advance-intro">
                                    <p className="advance-title">
                                        整合处理
                                    </p>
                                    <p className="advance-sub">
                                        全方位整合处理您的数据，为您提供一套完整数据解决方案
                                    </p>
                                </div>
                            </li>
                            <li className="advance-item">
                                <div className="advance-icon">
                                    <img src="//cdn.taosj.com/data-www-activity/pages/default/img/linghuofenxi.png" alt=""/>
                                </div>
                                <div className="advance-intro">
                                    <p className="advance-title">
                                        灵活分析
                                    </p>
                                    <p className="advance-sub">
                                        多维度分析展现，数据一目了然
                                    </p>
                                </div>
                            </li>
                            <li className="advance-item">
                                <div className="advance-icon">
                                    <img src="//cdn.taosj.com/data-www-activity/pages/default/img/jingmisuanfa.png" alt=""/>
                                </div>
                                <div className="advance-intro">
                                    <p className="advance-title">
                                        精密算法
                                    </p>
                                    <p className="advance-sub">
                                        机器学习算法分析数据，PB级数据处理能力
                                    </p>
                                </div>
                            </li>
                            <li className="advance-item" style={{borderRight:'none',width: '280px'}}>
                                <div className="advance-icon">
                                    <img src="//cdn.taosj.com/data-www-activity/pages/default/img/zhuanshukefu.png" alt=""/>
                                </div>
                                <div className="advance-intro">
                                    <p className="advance-title">
                                        专属客服
                                    </p>
                                    <p className="advance-sub">
                                        一对一专属客服，专业技术解读，全方位产品解读
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="panel-banner">
                    <div className="panel-body">
                        <div className="center-sm">
                            <h2>最全面的PB数据最靠谱的销量数据</h2>
                            <h5>The most comprehensive PB data and the most reliable sales data</h5>
                        </div>
                    </div>
                </div>
                <HighChart/>
                <main className="main restraint">
                    <section className="main__title-section"><h2 className="title-text__head"><span className="text">数据融合</span>
                        <span className="slash">/</span> <span className="text">消费者洞察</span> <span className="slash">/</span>
                        <span className="text">效果优化</span></h2>
                        <p>电商营销的本质是利用数据提高消费者购买转化率，促进GMV增长。通过融合线上线下数据，生成消费者画像并进行分析，帮助短期ROI提升销售额，中长期广告蓄水认知和兴趣消费者，再通过运营活动进行购买转化。</p>
                    </section>
                    <section className="main__content">
                        <div className="main__section-head-img img_1"/>
                        <h3>数据融合</h3><p className="content_two-column">
                        <span>融合线上线下数据，打破数据孤岛，让数据不再割裂。品牌可以打通自有门店和电商平台数据，融合CRM、电商数据、广告数据、媒体数据、以及全网消</span>
                        <span>费者行为数据，最终形成品牌自己的数据资产。我们支持私有化本地部署和云端集成两种部署方式，让品牌将数据牢牢掌握在自己手中。</span></p></section>
                    <section className="main__content">
                        <div className="main__section-head-img img_2"/>
                        <h3>消费者洞察</h3><p className="content_two-column">
                        <span>全域全渠道洞察消费者，360度无死角透视消费者喜好，通过数据全链路透视，消费者数据资产变得可评估、可优化、可运营，最终实现消费者数据资产</span>
                        <span>的激活和增值，去帮助品牌在效果广告和品牌广告投放针对同一属性的目标消费人群做营销指导。</span></p></section>
                    <section className="main__content">
                        <div className="main__section-head-img img_3"/>
                        <h3>营销决策</h3><p className="content_two-column">
                        <span>告别凭经验、拍脑袋做策略，搭建属于品牌自己的营销决策AI大脑，实时回流沉淀品牌在线上线下和消费者的每一次互动，追踪品牌消费者的全链路状态，</span>
                        <span>根据数据，打通“数据孤岛”，形成品牌自己的数据资产，我们支持私有化本地部署和云端集成两种部署方式，让品牌自己的数据掌握在自己手中。</span></p></section>
                    <section className="main__content">
                        <div className="main__section-head-img img_4"/>
                        <h3>优化工具</h3><p className="content_two-column">
                        <span>我们为品牌量身定制了在第三方电商平台上的自动化广告投放工具集群，来帮助品牌在广告投放执行中沉淀数据、分析数据、再将数据分析结果反哺下一次</span>
                        <span>的营销报告、竞争分析报告，真正做到数据分析结果指引品牌生意增长，找出GMV增量空间，持续提升市场占有率。</span></p></section>
                    <section className="main__content">
                        <div className="main__section-head-img img_5"/>
                        <h3>数据报告</h3><p className="content_two-column">
                        <span>我们会在和品牌的服务过程中，持续为品牌监测每次营销投放的媒体选择，对于媒体产生的数据信息和营销效果做数</span>
                        <span>据追踪和分析记录，指引下一次的营销预算做精细化分配，将钱花在对于品牌更有回报价值的媒体资源上。</span></p></section>
                    <section className="main__content">
                        <div className="main__section-head-img img_6"/>
                        <h3>媒体监测</h3><p className="content_two-column">
                        <span>融合线上线下数据，打破数据孤岛，让数据不再割裂。品牌可以打通自有门店和电商平台数据，融合CRM、电商数据、广告数据、媒体数据、以及全网消</span>
                        <span>费者行为数据，最终形成品牌自己的数据资产。我们支持私有化本地部署和云端集成两种部署方式，让品牌将数据牢牢掌握在自己手中。</span></p></section>
                    <section className="product-trials-btn-container"><h3 style={{marginTop:"30px"}}>DUOZHUN DATA</h3><h2>让数据创造企业价值</h2>
                        <button className="dz-button" id="applyForTrialBtn">
                            <span className="dink-point lt"/>
                            <span className="dink-point rt"/>
                            <span className="dink-point lb"/>
                            <span className="dink-point rb"/>
                            即刻开始，申请试用
                        </button>
                    </section>
                </main>
                <div className="index_bottom_container">
                    <div className="index_bottom_content">
                        <div>
                            <div><Icon type="radar-chart" style={{color:"#fff"}}/></div>
                            <div>
                                <h4>数据保障</h4>
                                <p>提供安全、中立、可靠的数据资源</p>
                            </div>
                        </div>
                        <div>
                            <div><Icon type="fund"  style={{color:"#fff"}}/></div>
                            <div>
                                <h4>交易无忧</h4>
                                <p>供应商、会员实名认证，放心交易</p>
                            </div>
                        </div>
                        <div>
                            <div><Icon type="laptop"  style={{color:"#fff"}}/></div>
                            <div>
                                <h4>优质服务</h4>
                                <p>专业人员一对一服务，贴心呵护</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="foot_index_container">
                    <div className="foot_index_content_1">
                        <dl>
                            <dt>数据服务</dt>
                            <dt>支付方式</dt>
                            <dt>下载与调用</dt>
                            <dt>发布数据需求</dt>
                        </dl>
                        <dl>
                            <dt>供应商服务</dt>
                            <dt>发布数据供应</dt>
                            <dt>供应商入驻</dt>
                            <dt>合作协议</dt>
                        </dl>
                        <dl>
                            <dt>问题和帮助</dt>
                            <dt>常见问题</dt>
                            <dt>发票问题</dt>
                            <dt>注册协议</dt>
                            <dt>购买协议</dt>
                        </dl>
                        <dl>
                            <dt>关于我们</dt>
                            <dt>网站简介</dt>
                            <dt>发展历程</dt>
                            <dt>企业新闻</dt>
                            <dt>联系我们</dt>
                        </dl>
                        <div>
                            <div>
                                <Icon type="mail" style={{position:"relative",fontSize:"30px",color:"#fff",top:"5px"}}/>
                                <p style={{display:"inline-block",paddingBottom:"5px"}}>（周一至周五 9:00-17:30）</p>
                                <p>客服邮箱：xxxxxxx@octopus.com</p>
                            </div>
                        </div>
                    </div>
                    <div style={{height: '1px',width: '100%',background:' #445c7e'}}/>

                </div>
            </div>
        );
    }
}

export default Main;
