import React, {Component} from 'react';
import "./css.css"
import src from "../img/ab-banner.jpg"
import { Row, Col } from 'antd';
class About extends Component {
    render() {
        return (
            <div>
                <div className="panel panel-banner" style={{marginTop:"0"}}>

                        <Row type="flex" justify="space-around">
                            <Col span={18}>
                                <div className="panel-body">
                                <ul >
                                    <li>
                                        <h2 style={{textAlign:"center"}}>Octupos电商数据分析专家</h2>
                                        <h5 style={{textAlign:"center"}}>Octupos e-commerce data analysis experts</h5>
                                    </li>
                                </ul>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className="panel panel-default" style={{backgroundColor: '#fbfbfb'}}>
                    <div className="panel-body">
                        <Row type="flex" justify="space-around">
                            <Col span={18}>
                                <h2>公司简介</h2>
                                <h4 className="text-gray">company profile</h4>
                                <hr/>
                            </Col>
                            <Row>
                                <Col span={6} offset={6}>
                                    <p>苏氏科技有限公司成立于2013年，是大连知名的高新技术企业。旗下“Octupus”数据平台，在跨境电商行业享有极高的知名度。为电商卖家提供涵盖淘宝、天猫、亚马逊、WISH等多平台的电商数据分析工具，以及邮件催评，精准EDM营销工具。</p>
                                    <p>网络总部坐落于美丽的大连东软信息学院7号楼，技术研发人员1人，资深的开发人员专注大数据技术研发达5年以上。除了专业的技术团队，公司还有一批拥有丰富市场经验的销售市场人员以及24X7全天候服务的专业客服团队。公司致力于通过大数据分析的方式解决外贸企业选品以及营销痛点，配合国家政策层面，打造成一条真正的“网上丝绸之路”，为中国制造的转型升级，品牌出海而奋斗。</p>
                                </Col>
                                <Col span={6} offset={1}>
                                    <img  style={{width:"100%"}} src={src} alt=""/>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </div>
                <div className="panel panel-default" style={{backgroundColor: '#fbfbfb'}}>
                    <div className="panel-body">
                        <Row type="flex" justify="space-around">
                            <Col span={18}>
                                <h2>Octopus电商数据平台</h2>
                                <h4 className="text-gray">ABOUT Octopus</h4>
                                <hr/>
                            </Col>
                            <Row>
                                <Col span={13} offset={6}>
                                    <p>“Octopus”电商数据平台是大连苏氏网络科技有限公司为电商卖家提供涵盖淘宝、天猫、京东、亚马逊、WISH、JOOM、MYMALL、TOP等多平台的电商数据分析平台。凭借强大的技术能力，在业界享有很高的知名度，以及较大的市场占有量。在WISH PB 、JOOM等平台上更有全网独一无二的数据分析处理能力。</p>
                                    <p>如今Octopus已经为数万的中国跨境电商卖家提供了数据选品、广告数据分析，市场报告等服务，未来还将会借助自身强有力的技术能力为广大卖家用户，提供海外社交媒体、跨境电商平台，搜索引擎全方位的数据服务。</p>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                </div>

                <div className="panel panel-default" style={{backgroundColor: '#fbfbfb'}}>
                    <div className="panel-body">
                        <Row type="flex" justify="space-around">
                            <Col span={18}>
                                <div id="bgc">

                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
