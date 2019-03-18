import React, {Component} from 'react';
import "./Summary.css"
import url from "../img/wenben.png";
class Summary extends Component {

    render() {
        return (
            <div className="page-main">
                <div className="head">
                    <div className="wrap">
                        <div className="title">
                            <h2>
                                少数领跑者正在使用的
                                <span>商业数据</span>
                            </h2>
                            <h3>从公开网页采集的互联网商业数据 - 电商、外卖、物流、房产、汽车、其他</h3>
                        </div>
                    </div>
                </div>

                <div className="summary">
                    <div className="wrap">
                        <div className="notes">
                            <p>我们每天爬取和处理中国主要电商平台超100亿的交易额，覆盖全网2万+细分行业、40万+品牌。
                            </p>
                            <div className="col-line"/>
                            <p>通过私有算法，将数据聚合成全方位的市场情报，并以SaaS软件的方式给客户使用。</p>
                            <div className="col-line"/>
                            <p>无论您是网络零售商、广告公司还是品牌商，都可以方便地用我们的软件跟踪任何品牌的表现，包括销售量、销售额、价格、评价和市场花费。</p>
                            <div className="col-line"/>
                            <p>在宏观层面上，投资咨询公司和政府部门可以跟踪电商平台的整体GMV走势和每一个类目的表现。</p>
                        </div>
                    </div>


                </div>

                <div className="product-detail">
                    <div className="wrap">
                        <div className="deep">
                            <h3>专业高品质的数据服务</h3>
                            <h4>每项数据产品都经过三道工序打磨</h4>
                            <ul className="content clear">
                                <li className="item0">
                                    <i/>
                                    <h5>高并发数据采集</h5>
                                    <p>部署数量庞大的爬虫服务器机群，高效并发协同工作，从公开网页收集具有商业价值的公开数据
                                    </p>
                                </li>
                                <li className="item1">
                                    <i/>
                                    <h5>数据的结构化处理</h5>
                                    <p>采用强大计算力的高性能服务器机群，按照高度优化的算法处理把采集到的公开数据转化为结构化的商业数据
                                    </p>
                                </li>
                                <li className="item2">
                                    <i/>
                                    <h5>Saas服务和定制服务</h5>
                                    <p>配置高性能前端服务器，给客户提供稳定高效的Saas服务和数据定制服务
                                    </p>
                                </li>
                            </ul>
                            <div className="form-list btn-wrap">
                                <div className="submit-link">获取更多产品信息</div>
                            </div>
                        </div>

                        <div className="cover">
                            <div className="wrap">
                                <h3>我们覆盖的网站/平台</h3>
                                <h4>提供每日、每周、每月的数据集。细到商品级的详尽数据。</h4>
                                <ul className="content">
                                    <li className="item">
                                        <h5>传统电商</h5>
                                        <div className="row-line"/>
                                        <ul>
                                            <li>淘宝/天猫
                                            </li>
                                            <li>京东
                                            </li>
                                            <li>苏宁</li>
                                            <li>国美</li>
                                            <li>聚美</li>
                                            <li>亚马逊</li>

                                        </ul>
                                    </li>
                                    <li className="item">
                                        <h5>新电商</h5>
                                        <div className="row-line"/>
                                        <ul>
                                            <li>拼多多
                                            </li>
                                            <li>小红书</li>
                                            <li>网易考拉</li>
                                            <li>网易严选</li>
                                        </ul>
                                    </li>

                                    <li className="item">
                                        <h5>外卖</h5>
                                        <div className="row-line"/>
                                        <ul>
                                            <li>饿了么
                                            </li>
                                            <li>美团
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="item">
                                        <h5>物流</h5>
                                        <div className="row-line"/>
                                        <ul>
                                            <li>中通
                                            </li>
                                            <li>顺丰
                                            </li>
                                            <li>圆通
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="product-detail" style={{height:"1800px"}}>
                    <div className="wrap">
                        <div className="deep" style={{top:'10px'}}>
                            <h3>市场情报</h3>
                            <h4>帮助企业了解线上商业的外部环境</h4>
                            <ul className="content clear">
                                <li className="item3"><i></i><h5>市场销售数据</h5>
                                    <p>我们为零售商、品牌商和投资、研究机构提供给完整的市场数据解决方案，包括原始数据、SaaS报表系统、行业分析报告。</p>
                                </li>
                                <li className="item4"><i></i><h5>营销活动跟踪</h5>
                                    <p>为客户每日监测标的品牌、店铺、商品的关键词广告投放等。</p></li>
                                <li className="item5"><i></i><h5>渠道价格监测系统</h5><p>帮助品牌主了解电商渠道中的分销价格体系，针对破坏价格体系的情况进行报告。</p>
                                </li>
                            </ul>
                        </div>

                        <div className="cover" style={{paddingTop:"50px"}}>
                            <div className="wrap">
                                <h3>文本挖掘/平台</h3>
                                <h4>借助AI分析分结构化的商品评价文本、图片等</h4>

                                <div className="content">
                                    <p>基于我们采集到的海量商品历史评论文本进行挖掘，总结产品改进思路&nbsp;。或是对海量商品的图片和文本进行非结构化的分类聚类分析。
                                    </p>
                                    <div className="img-wrap" style={{height:"800px"}}>
                                        <p style={{textAlign:'center',marginTop: '45px',marginBottom: '-45px',position: 'relative',zIndex: '10',fontSize: '14px'}}>案例：某两个知名手机品牌的评论分析图表（<a
                                            style={{color:'#ff6155'}}
                                            href="#">完整报告</a>）
                                        </p>
                                        <img src={url} alt=""/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Summary;
