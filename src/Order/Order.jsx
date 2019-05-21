import React, {Component} from 'react';
import {Col, Row, Table, Divider, Tag, message ,Popconfirm} from "antd";
import "./css.css"
import {store} from "../redux/action";
import {Link} from "react-router-dom";
const  axios = require("axios");

function cancel(e) {
    message.error('操作取消');
}
let that;
function confirm( orderId) {
    axios.post('http://surenjun.com:3131/deleteOrder',{
        orderId
    }).then(res =>{
        const data = res.data;
        if(data.success){
            message.success('删除成功');
            axios.post('http://surenjun.com:3131/getOrder',{
                orderUser : that.state.orderUser
            }).then(res =>{
                const data = res.data;
                let tableData = [];
                if(data.success){
                    data.orderDocs.forEach((item,key) =>{
                        const {orderName,
                            orderTime,
                            goodName,
                            orderPrice,
                            orderStatus} = item;
                        const orderId = item._id;
                        tableData.push({
                            key : key ,
                            orderName,
                            orderTime,
                            goodName : <span style={{color: 'rgb(24, 144, 255)'}}>{goodName}</span>,
                            orderPrice:"¥ " + orderPrice,
                            orderStatus,
                            action :{orderStatus,orderId ,orderName ,orderTime ,orderPrice, goodName}
                        })
                    })
                    console.log(tableData);
                    that.setState({
                        loading:false,
                        data :tableData
                    })
                }
            })
        }
    })
}
function moveToPay() {
    that.props.history.push("/Pay")
}
const columns = [
    {
        title: '订单名称',
        dataIndex: 'orderName',
        key: 'orderName',
        align :"center"
    },
    {
        title: '下单时间',
        dataIndex: 'orderTime',
        key: 'orderTime',
        align :"center"
    },
    {
        title: '商品名称',
        dataIndex: 'goodName',
        key: 'goodName',
        align :"center"
    },
    {
        title: '支付金额(元)',
        dataIndex: 'orderPrice',
        key: 'orderPrice',
        align :"center"
    },
    {
        title: '支付状态',
        key: 'orderStatus',
        align :"center",
        dataIndex: 'orderStatus',
        render: status => (
                <Tag color={status == "0" ? "red":"green"} >
                    {status == "0" ? "未支付":"已支付"}
                </Tag>
        )
    },
    {
        title: '操作',
        key: 'action',
        dataIndex: 'action',
        align :"center",
        render: order => (
            <span>
                {
                    (order.orderStatus == "0") &&
                    <Link onClick={moveToPay} to={{
                        state:{
                            orderToPay : true,
                            orderName:order.orderName,
                            goodId:order.orderId,
                            goodName:order.goodName,
                            goodPrice:order.orderPrice
                        }
                    }}>立即购买</Link>
                }
                {
                    (order.orderStatus == "0") &&  <Divider type="vertical" />
                }
                <Popconfirm
                    placement="topRight"
                    title="确认删除当前订单吗?"
                    onConfirm={()=>{
                        confirm(order.orderId)
                    }}
                    onCancel={cancel}
                    okText="是的"
                    cancelText="取消"
                >
                    <a style={{color: '#f5222d'}} href="javascript:;">删除订单</a>
                </Popconfirm>
            </span>
        ),
    }
];

class Order extends Component {
    state = {
        orderUser :store.getState(),
        loading : false,
        data: []
    }
    componentDidMount() {
        that = this;
        this.setState({
            loading:true
        })
        axios.post('http://surenjun.com:3131/getOrder',{
            orderUser : this.state.orderUser
        }).then(res =>{
            const data = res.data;
            let tableData = [];
            if(data.success){
                data.orderDocs.forEach((item,key) =>{
                    const {orderName,
                        orderTime,
                        goodName,
                        orderPrice,
                        orderStatus} = item;
                    const orderId = item._id;
                    tableData.push({
                        key : key ,
                        orderName,
                        orderTime,
                        goodName : <span style={{color: 'rgb(24, 144, 255)'}}>{goodName}</span>,
                        orderPrice:"¥ " + orderPrice,
                        orderStatus,
                        action :{orderStatus,orderId ,orderName ,orderTime ,orderPrice, goodName}
                    })
                })
                console.log(tableData);
                this.setState({
                    loading:false,
                    data :tableData
                })
            }
        })
    }
    render() {
        return (
            <div>
                <div className="c-person-header" id="c_maijia_uc_header">
                    <Row type="flex" justify="center">
                        <Col span={21}>
                            <div className="inner">
                                <div className="header-logo clearfix">
                                    <div className="fl tt">
                                        订单记录<br/>
                                        <span className="ln">Order Record</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row type="flex" justify="center">
                    <Col span={21}>
                        <Table
                            loading ={this.state.loading}
                            pagination = {false}
                            columns={columns}
                            dataSource={this.state.data}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Order;
