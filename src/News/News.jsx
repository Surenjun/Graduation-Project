import React, {Component} from 'react';
import "./css.css"
import { Row, Col ,Spin} from 'antd';
const  axios = require("axios");
class News extends Component {
    state = {
        loading:true,
        data:null
    }
    componentDidMount() {
        axios.post('http://surenjun.com:3131/getArticles').then(res =>{
            this.setState({
                loading:false,
                data:res.data
            })
        })
    }
    render() {
        return (
            <div style={{marginTop:"50px"}}>
                <Row type="flex" justify="space-around">
                    {
                        this.state.loading
                            ? (<div style={{padding:"130px 20px",textAlign:'center'}}><Spin/></div>)
                            :this.state.data.slice(0,4).map(item =>
                                <Col span={4} >
                                    <img src={item.image} alt="" style={{width:"100%"}}/>
                                    <Row className={"floor1"} >
                                        <Col style={{padding:"12px 30px"}} span={24}>{item.title}</Col>
                                    </Row>
                                    <Row className={"floor2"} >
                                        <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                                        <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>{item.number}人阅读</Col>
                                    </Row>
                                </Col>
                            )
                    }
                </Row>
                <Row type="flex" justify="space-around"  style={{marginTop:"50px"}}>
                    {
                        this.state.loading
                            ? null
                            :this.state.data.slice(4,8).map(item =>
                                <Col span={4} >
                                    <img src={item.image} alt="" style={{width:"100%"}}/>
                                    <Row className={"floor1"} >
                                        <Col style={{padding:"12px 30px"}} span={24}>{item.title}</Col>
                                    </Row>
                                    <Row className={"floor2"} >
                                        <Col style={{padding:"12px 30px"}} span={12}>Octopus</Col>
                                        <Col style={{padding:"12px 0",textAlign:"center"}} span={12}>{item.number}人阅读</Col>
                                    </Row>
                                </Col>
                            )
                    }
                </Row>
            </div>
        );
    }
}

export default News;
