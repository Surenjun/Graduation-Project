import React, {Component} from 'react';
import {Row, Col, Button, message} from 'antd';
import {Link} from "react-router-dom"
import "../DataMarket/css.css"
import "./css.css"
import {store} from "../redux/action";

let goodId = null;

class DataDetail extends Component {
    state = {
        name :store.getState()
    }
    componentWillMount(){
        let params = new URLSearchParams(this.props.location.search);
        goodId = params.get("name");
    }
    changeToPay(){
        console.log(1);
        if(this.state.name === "您好"){
            message.warning('请先登录账号',1);
        }else{
            this.props.history.push('/Pay');
        }
    }
    render() {
        return (
            <div>
                {
                    goodId === "5c98327021eb0d25285b295d" ?  <Row type="flex" justify="space-around">
                        <Col span={16} offset={1}>
                            <div className="apinew_head">
                                <Row type="flex" justify="center">
                                    <Col span={6} style={{textAlign:"center"}}>
                                        <img src="https://dfs1.tdata.cn/group1/M00/00/04/rBYDCVt-Tf6AJzj9AAAmFi2bnZ4950.png"/>
                                        <br/>
                                        <Row type="flex" justify="center">
                                            <label className="api_lookthrough">浏览 <span>8518</span></label>
                                            <span style={{paddingLeft:"20px"}}/>
                                            <label className="api_fenxiang">分享</label>
                                        </Row>
                                    </Col>
                                    <Col span={17}>
                                        <form>
                                            <h3> 商品零售数据查询</h3>
                                            <p> 提供部分主流电商平台店铺和商品多维分析数据，可用于体验。链接xxxxxx</p>
                                            <div className="api_price_frame">
                                                <Row>
                                                    <Col span={4} className="no-pad-l-r">
                                                        <label style={{marginTop: '10px'}}>价格</label>
                                                    </Col>
                                                    <Col span={16} className="no-pad-l-r">
                                                        <p>￥<b className="real_price">199.00</b></p>
                                                    </Col>
                                                </Row>
                                                <div className="api_group" style={{marginTop:"20px"}}>
                                                    <Row>
                                                        <Col span={4} className="no-pad-l-r">
                                                            <label>规格</label>
                                                        </Col>
                                                        <Col span={16} className="no-pad-l-r">
                                                            <div className="api_format">
                                                                1个月
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row style={{marginTop:"20px"}}>
                                                    <Col span={24}>
                                                        <ul>
                                                            <li>供应商：<span>Octopus数据库</span></li>
                                                            <li>标签：
                                                                <span>商品零售数据</span><span>在线查询</span><span>电子商务数据</span>	                            </li>
                                                            <li>更新频率：<span>每月</span></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={4} offset={19}>
                                                        <Button type="primary" size={"large"}>
                                                            <Link onClick={this.changeToPay.bind(this)} to={{
                                                                state:{
                                                                    goodId:"5c98327021eb0d25285b295d",
                                                                    goodName:"商品零售数据查询",
                                                                    goodPrice:"199.00"
                                                                }
                                                            }}>立即购买</Link>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                            <Row className={"supplier_intro"}>
                                <Col span={24}>
                                    <div className="data_title"
                                         id="data_title">
                                        <div className="data_title_active">
                                            <a href="javascript:void(0)">详情介绍</a>
                                        </div>
                                    </div>

                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>详情介绍<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>

                                    <Row type="flex" justify="center">
                                        <Col span={22}>
                                            <p style={{whiteSpace: 'normal'}}>
                                                <span style={{color:'rgb(63, 63, 63)'}}>商品零售数据查询提供多维度的零售数据查询和分析，旨在帮助用户掌握商品零售的发展状况和趋势，剖析行业内部的结构组成，分析和对比地区的电商发展要素，辅助用户进行经济和商务决策。</span>
                                                &nbsp; &nbsp;</p>
                                            <p><span style={{color: 'rgb(192, 0, 0)'}}>看行情的时间范围2017年5-9月，</span>
                                                <span style={{color: 'rgb(192, 0, 0)',textIndent:'2em'}}>查店品的时间范围2017年5-12月，覆盖部分主流电商平台。</span></p>
                                        </Col>
                                    </Row>

                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>功能模块<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>
                                    <p><strong>综合查询</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>获取各行业、地区、时间范围的商家数据、销售数据、评价数据等基础数据；</p>
                                    <p>发掘零售市场的发展状况和发展趋势。</p>
                                    <p><strong>电商行业数据</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>覆盖服饰鞋帽、家用电器等重点行业；</p>
                                    <p>提供行业、品牌等重点维度分析；</p>
                                    <p>汇集了行业信息、销售数据，评价情况；</p>
                                    <p>分析行业的发展轨迹、市场分布情况；</p>
                                    <p>为品牌商分析竞争对手提供数据依据。</p>
                                    <p><strong>地区规模数据</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>掌握各地区店铺发展规模、趋势；</p>
                                    <p>掌握各地区销售额结构、排名；</p>
                                    <p>地区规模数据以商品零售的地区规模数据为核心，方便研究人员，以丰富图表展示地区商品零售的发展趋势，以及地区层级、行业、平台、平台类型的组成情况。</p>
                                    <p style={{whiteSpace: 'normal'}}><br/> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>应用场景<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>
                                    <p><strong>零售运营管理</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>帮助电商运营人员掌握行业的整体状况，获取关注品牌、店铺、商品的交易价格、交易数量等数据，辅助运营人员进行营销工作。</p>
                                    <p><strong>行业市场研究</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>分析行业的市场现状及趋势，帮助行业产业链的企业研究市场规律，调整企业经营，渠道管理。</p>
                                    <p><strong>电商宏观经济分析</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>提供网络零售整体市场状况、发展趋势及各个地区分析，便于政府、行业机构的研究人员科学验证，补充宏观经济数据。<br/> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p style={{textAlign: 'center'}}>
                                        <img src="//dfs1.tdata.cn/group1/M00/00/0D/rBYERFnPMqOALwMwAAXNBEXt-g0336.png" title="M00/00/0D/rBYERFnPMqOALwMwAAXNBEXt-g0336.png" alt="M00/00/0D/rBYERFnPMqOALwMwAAXNBEXt-g0336.png" width="80%"/><br/>
                                        产品截图
                                    </p>
                                    <h4 style={{textAlign: 'center'}}>
                                    <span style={{color:'#3f3f3f'}}>
                                        <span style={{fontSize: '20px'}}>优势</span>
                                    </span> &nbsp; &nbsp;
                                    </h4>
                                    <p><strong>统一的标准行业类目</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>建立和采用标准的行业类目，将各主流的电商平台的行业类目与标准行业类目完成映射</p>
                                    <p><strong>多维度，多角度的数据</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>可以根据地区、行业、品牌、平台等维度，进行全面的数据分析</p>
                                    <p><strong>直观多样化的报表展示</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>提供关键数据及时间趋势、数据地图、组成分布等指标，以直观方式展示数据</p>
                                    <p><strong>数据持续更新</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>数据持续定时更新主流电子商务平台的最新数据</p>
                                    <p><strong>数据处理经验丰富</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>拥有数据科学家团队，采用科学数学建模处理数据</p>
                                    <p><strong>行业客户服务经验丰富</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p>以电商行业数据，服务过诸多企业，机构、政府客户</p>
                                    {/*<h4 style={{textAlign: 'center'}}>
                                    <span style={{color:'#3f3f3f'}}>
                                        <span style={{fontSize: '20px'}}>联系我们</span>
                                    </span> &nbsp; &nbsp;
                                </h4>
                                <Row type="flex" justify="center">
                                    <Col span={12}>
                                        <Col span={3}>
                                            <img src={src}/>
                                        </Col>
                                        <Col span={9}>
                                            <h4>联系我们购买，成为数据VIP!</h4>
                                            <p>专属定制，把握市场先机。</p>
                                        </Col>
                                    </Col>
                                    <Col span={12}>
                                        <p>联系电话：400-xxxx-xxx&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:surenjun@octupus.com </p>
                                        <p>地址：辽宁省大连市高新园区</p>
                                    </Col>
                                </Row>*/}
                                </Col>
                            </Row>

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
                    </Row>: ""
                }
                {
                    goodId === "5c9832ac21eb0d25285b295e" ?  <Row type="flex" justify="space-around">
                        <Col span={16} offset={1}>
                            <div className="apinew_head">
                                <Row type="flex" justify="center">
                                    <Col span={6} style={{textAlign:"center"}}>
                                        <img src="https://dfs1.tdata.cn/group1/M00/00/09/rBYDCVwgd66AUKRiAAAbNG62PQ0351.png"/>
                                        <br/>
                                        <Row type="flex" justify="center">
                                            <label className="api_lookthrough">浏览 <span>664</span></label>
                                            <span style={{paddingLeft:"20px"}}/>
                                            <label className="api_fenxiang">分享</label>
                                        </Row>
                                    </Col>
                                    <Col span={17}>
                                        <form>
                                            <h3>  2018年天猫双11懒人产品分析报告</h3>
                                            <p> 11月11日全天天猫数据交易情况分析，包含地域、品牌、品类、农村电商等数据分析。</p>
                                            <div className="api_price_frame">
                                                <Row>
                                                    <Col span={4} className="no-pad-l-r">
                                                        <label style={{marginTop: '10px'}}>价格</label>
                                                    </Col>
                                                    <Col span={16} className="no-pad-l-r">
                                                        <p>￥<b className="real_price">99.00</b></p>
                                                    </Col>
                                                </Row>
                                                <div className="api_group" style={{marginTop:"20px"}}>
                                                    <Row>
                                                        <Col span={4} className="no-pad-l-r">
                                                            <label>规格</label>
                                                        </Col>
                                                        <Col span={16} className="no-pad-l-r">
                                                            <div className="api_format">
                                                                单个报告
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row style={{marginTop:"20px"}}>
                                                    <Col span={24}>
                                                        <ul>
                                                            <li>供应商：<span>Octopus数据库</span></li>
                                                            <li>标签：
                                                                <span>双十一天猫数据分析报告</span><span>双十一数据分析报告</span><span>电子商务数据</span>	                            </li>
                                                            <li>更新频率：<span>每月</span></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={4} offset={19}>
                                                        <Button type="primary" size={"large"}>
                                                            <Link onClick={this.changeToPay.bind(this)} to={{
                                                                        state:{
                                                                            goodId:"5c9832ac21eb0d25285b295e",
                                                                            goodName:"2018年天猫双11懒人产品分析报告",
                                                                            goodPrice:"99.00"
                                                                        }
                                                            }}>立即购买</Link>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                            <Row className={"supplier_intro"}>
                                <Col span={24}>
                                    <div className="data_title"
                                         id="data_title">
                                        <div className="data_title_active">
                                            <a href="javascript:void(0)">详情介绍</a>
                                        </div>
                                    </div>

                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>数据报告介绍<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>

                                    <Row type="flex" justify="center">
                                        <Col span={22}>
                                            <p style={{whiteSpace: 'normal'}}>
                                                <span style={{color:'rgb(63, 63, 63)'}}>
                                                    2018年天猫双11懒人产品分析报告从懒人小火锅、AI智能设备、自动炒菜机、洗碗机、洗烘一体机五大方面进行数据分析。数据来源为天元数据监测的天猫商城平台数据，时间范围为11月11日全天。
                                                </span>
                                                &nbsp; &nbsp;
                                            </p>
                                            <p style={{whiteSpace: 'normal'}}>
                                                <span style={{color:'rgb(63, 63, 63)'}}>
                                                    本报告可按需定制。
                                                </span>
                                                &nbsp; &nbsp;
                                            </p>
                                        </Col>
                                    </Row>

                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>数据报告摘要<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>
                                    <p><strong>目录：</strong> &nbsp; &nbsp; &nbsp; &nbsp;</p>
                                    <p> 1.懒人小火锅 </p>
                                    <p> 2.AI智能设备 </p>
                                    <p> 3.自动炒菜机</p>
                                    <p> 4.洗碗机 </p>
                                    <p> 5.洗烘一体机 </p>
                                    <p style={{textAlign: 'center'}}>
                                        <img src="http://dfs1.tdata.cn/group1/M00/00/07/rBYDClwhjx2AU9gvAAAsnFSrczk056.png" title="M00/00/0D/rBYERFnPMqOALwMwAAXNBEXt-g0336.png" alt="M00/00/0D/rBYERFnPMqOALwMwAAXNBEXt-g0336.png" width="45%"/><br/>
                                        部分报告内容截图
                                    </p>

                                    <div className="title" style={{marginTop:"40px"}}>
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>供应商介绍<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>
                                    <p> Octupus数据——国内领先的大数据服务厂商，秉持“聚合海量价值数据，释放数据正能量”的理念，推动数据开放、数据交易和创新应用，为政府、企业及个人创新创业提供数据服务，实现数据价值。</p>
                                    <p> Octupus数据吸纳卓创资讯、基因云馆、北京宜信致诚、广州云润等上百个大数据企业，打造了国内最大的数据生态联盟：天元数盟。持续整合自有数据、政府公开数据和第三方数据，数据已涵盖电商、金融、行业价格、大宗商品交易、企业信用等多个领域。</p>

                                </Col>
                            </Row>

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
                    </Row>: ""
                }
                {
                    goodId === "5c98330d21eb0d25285b2960" ?  <Row type="flex" justify="space-around">
                        <Col span={16} offset={1}>
                            <div className="apinew_head">
                                <Row type="flex" justify="center">
                                    <Col span={6} style={{textAlign:"center"}}>
                                        <img src="https://dfs1.tdata.cn/group1/M00/00/05/rBYDClvXxyuAEpGoAAA9NoVdagc633.png"/>
                                        <br/>
                                        <Row type="flex" justify="center">
                                            <label className="api_lookthrough">浏览 <span>993</span></label>
                                            <span style={{paddingLeft:"20px"}}/>
                                            <label className="api_fenxiang">分享</label>
                                        </Row>
                                    </Col>
                                    <Col span={17}>
                                        <form>
                                            <h3>  2018年9月电商大闸蟹销售数据</h3>
                                            <p>  数据项包括商品名称、价格、销售额、销量、商品url、店铺名称、省份、城市等。</p>
                                            <div className="api_price_frame">
                                                <Row>
                                                    <Col span={4} className="no-pad-l-r">
                                                        <label style={{marginTop: '10px'}}>价格</label>
                                                    </Col>
                                                    <Col span={16} className="no-pad-l-r">
                                                        <p>￥<b className="real_price">49.90</b></p>
                                                    </Col>
                                                </Row>
                                                <div className="api_group" style={{marginTop:"20px"}}>
                                                    <Row>
                                                        <Col span={4} className="no-pad-l-r">
                                                            <label>规格</label>
                                                        </Col>
                                                        <Col span={16} className="no-pad-l-r">
                                                            <div className="api_format">
                                                                单个报告
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                                <Row style={{marginTop:"20px"}}>
                                                    <Col span={24}>
                                                        <ul>
                                                            <li>供应商：<span>Octopus数据库</span></li>
                                                            <li>标签：
                                                                <span>大闸蟹数据</span><span>电商大闸蟹销售数据</span><span>电子商务数据</span>	                            </li>
                                                            <li>更新频率：<span>每月</span></li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={4} offset={19}>
                                                        <Button type="primary" size={"large"}>
                                                            <Link onClick={this.changeToPay.bind(this)}  to={{
                                                                state:{
                                                                    goodId:"5c98330d21eb0d25285b2960",
                                                                    goodName:"2018年9月电商大闸蟹销售数据",
                                                                    goodPrice:"49.90"
                                                                }
                                                            }}>立即购买</Link>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                            <Row className={"supplier_intro"}>
                                <Col span={24}>
                                    <div className="data_title"
                                         id="data_title">
                                        <div className="data_title_active">
                                            <a href="javascript:void(0)">详情介绍</a>
                                        </div>
                                    </div>

                                    <div className="title">
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>数据报告介绍<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>

                                    <Row type="flex" justify="center">
                                        <Col span={22}>
                                            <p style={{whiteSpace: 'normal'}}>
                                                <span style={{color:'rgb(63, 63, 63)'}}>
                                        2018年9月电商大闸蟹销售数据的数据项包含商品id、商品名称、品牌名称、价格、商品原价、商品销售量、商品销售额、商品url、类目id、类目、商品评价数、商品收藏数、商品库存、商品发货地、商品产地国家、商品参数、店铺id、店铺名称、店铺省份、店铺城市、店铺开店时间、店铺开店年数。
                                                </span>
                                                &nbsp; &nbsp;
                                            </p>
                                            <p style={{whiteSpace: 'normal'}}>
                                                <span style={{color:'rgb(63, 63, 63)'}}>
                                                    本报告可按需定制。
                                                </span>
                                                &nbsp; &nbsp;
                                            </p>
                                        </Col>
                                    </Row>

                                    {/*<div className="title">*/}
                                        {/*<h4><span style={{color:'rgb(63, 63, 63)'}}>数据样例<br/></span>*/}
                                            {/*&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;*/}
                                        {/*</h4>*/}
                                    {/*</div>*/}

                                    <div className="title" style={{marginTop:"40px"}}>
                                        <h4><span style={{color:'rgb(63, 63, 63)'}}>供应商介绍<br/></span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        </h4>
                                    </div>
                                    <p> Octupus数据——国内领先的大数据服务厂商，秉持“聚合海量价值数据，释放数据正能量”的理念，推动数据开放、数据交易和创新应用，为政府、企业及个人创新创业提供数据服务，实现数据价值。</p>
                                    <p> Octupus数据吸纳卓创资讯、基因云馆、北京宜信致诚、广州云润等上百个大数据企业，打造了国内最大的数据生态联盟：天元数盟。持续整合自有数据、政府公开数据和第三方数据，数据已涵盖电商、金融、行业价格、大宗商品交易、企业信用等多个领域。</p>

                                </Col>
                            </Row>
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
                    </Row>: ""
                }
            </div>
        );
    }
}

export default DataDetail;

