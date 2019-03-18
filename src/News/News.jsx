import React, {Component} from 'react';
import "./css.css"
import { Row, Col } from 'antd';

class News extends Component {

    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <Row type="flex" justify="space-around">
                    <Col span={4} >
                        <img src="http://admin.newmorehot.com/Uploads/Picture/2019-01-21/5c458a844218f.jpg" style={{width:"100%"}}/>
                        <Row className={"floor1"} >
                            <Col style={{padding:"12px 30px"}} span={24}>什么！大量WISH爆品突然没流量？</Col>
                        </Row>
                        <Row className={"floor2"} >
                            <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                            <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>2149人阅读</Col>
                        </Row>
                    </Col>
                    <Col span={4} >
                        <img src="http://admin.newmorehot.com/Uploads/Picture/2019-01-21/5c458a844218f.jpg" style={{width:"100%"}}/>
                        <Row className={"floor1"} >
                            <Col style={{padding:"12px 30px"}} span={24}>什么！大量WISH爆品突然没流量？</Col>
                        </Row>
                        <Row className={"floor2"} >
                            <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                            <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>2149人阅读</Col>
                        </Row>
                    </Col>
                    <Col span={4} >
                        <img src="http://admin.newmorehot.com/Uploads/Picture/2019-01-21/5c458a844218f.jpg" style={{width:"100%"}}/>
                        <Row className={"floor1"} >
                            <Col style={{padding:"12px 30px"}} span={24}>什么！大量WISH爆品突然没流量？</Col>
                        </Row>
                        <Row className={"floor2"} >
                            <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                            <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>2149人阅读</Col>
                        </Row>
                    </Col>
                    <Col span={4} >
                        <img src="http://admin.newmorehot.com/Uploads/Picture/2019-01-21/5c458a844218f.jpg" style={{width:"100%"}}/>
                        <Row className={"floor1"} >
                            <Col style={{padding:"12px 30px"}} span={24}>什么！大量WISH爆品突然没流量？</Col>
                        </Row>
                        <Row className={"floor2"} >
                            <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                            <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>2149人阅读</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default News;
