import React, { Component } from 'react'
import {  Menu  ,Icon} from "antd"
import "./Slider.css"

class Slider extends Component {

    render() {
        return (

            <Menu
                mode="inline"
                style={{ height:"500px",lineHeight: '100px' ,backgroundColor:"#fff",border:"none"}}
            >
                <Menu.Item key="taobao"><span style={{paddingLeft:"30px"}}>淘宝</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="jindong"><span style={{paddingLeft:"30px"}}>京东</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="tianmoa"><span style={{paddingLeft:"30px"}}>天猫</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="yamaxun"><span style={{paddingLeft:"30px"}}>亚马逊</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="suning"><span style={{paddingLeft:"30px"}}>苏宁</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="eBay"><span style={{paddingLeft:"30px"}}>eBay</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="Wish"><span style={{paddingLeft:"30px"}}>Wish</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="jumei"><span style={{paddingLeft:"30px"}}>聚美</span><Icon type="right" /></Menu.Item>
                <Menu.Item key="dangdang"><span style={{paddingLeft:"30px"}}>当当</span><Icon type="right" /></Menu.Item>
            </Menu>
        );
    }
}

export default Slider;
