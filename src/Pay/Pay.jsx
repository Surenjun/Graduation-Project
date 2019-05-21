import React, {Component} from 'react';
import "../Header/Header.css"
import "./css.css"
import StepNum from "./Step";
import { Checkbox ,Button , Radio ,message} from 'antd';

import alipay from "../img/alipay.png"
import union from "../img/union.png"
import wechat from "../img/wechat.jpg"
import {store} from "../redux/action"
const  axios = require("axios");
const RadioGroup = Radio.Group;

let {goodName ,goodPrice,goodId ,orderToPay ,orderName} = ["","",""];
class Pay extends Component {
    componentWillMount() {
        orderToPay = this.props.location.state.orderToPay;
        orderName = this.props.location.state.orderName;
        goodName = this.props.location.state.goodName;
        goodPrice = this.props.location.state.goodPrice;
        goodId = this.props.location.state.goodId;
        if(orderToPay){
            this.setState({
                num:1,
                Number:orderName
            });
        }
    }
    state = {
        num : 0,
        ifNotice:false,
        radioState : 0,
        Number : "201905" +new Date().getDate()+new Date().getHours() + "" + new Date().getMinutes() + new Date().getSeconds()
    };
    Format = function (fmt ,time) {
        const o = {
            "M+": time.getMonth() + 1, // 月份
            "d+": time.getDate(), // 日
            "h+": time.getHours(), // 小时
            "m+": time.getMinutes(), // 分
            "s+": time.getSeconds(), // 秒
            "q+": Math.floor((time.getMonth() + 3) / 3), // 季度
            "S": time.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    changeNum(){
        if(this.state.ifNotice){

            //增加订单
            const orderName = this.state.Number,
                  orderUser = store.getState(),
                  orderPrice = goodPrice,
                  orderStatus = 0,
                  orderTime = this.Format("yyyy-MM-dd hh:mm:ss" ,new Date());
            axios.post('http://surenjun.com:3131/addOrder',{
                orderName,orderUser,goodName,goodId,orderPrice,orderStatus,orderTime
            }).then(res =>{
                const data = res.data;
                if(data.success){
                    message.success('订单创建成功');
                    this.setState({num:1});
                }
            })
        }else{
            message.warning('请阅读购买协议');
        }
    }
    onChangeRadio(){
        this.setState({radioState:1})
    }
    sendPay(){
        if(this.state.radioState){
            const that = this;
            const hide = message.loading('正在支付..', 0);
            const orderName = this.state.Number,
                 orderStatus = 1;
            axios.post('http://surenjun.com:3131/payOrder',{
                orderName,orderStatus
            }).then(res =>{
                const data = res.data;
                if(data.success){
                    hide();
                    message.success('支付成功');
                    that.setState({num:2});
                }
            })
        }else{
            message.warning('请选择支付方式');
        }
    }
    onChange(e) {
        const bool = e.target.checked;
        if(bool){
            this.setState({
                ifNotice:true
            })
        }else{
            this.setState({
                ifNotice:true
            })
        }
    }
    render() {
        return (
            <div>
                <StepNum num={this.state.num}/>
                <div className="dingdan_wk">
                    {
                        this.state.num === 0 &&(
                           <div>
                               <h2 className="content_title">订单确认</h2>
                               <div className="dingdan_qrtitle dingdan_newqrtitle"><span>订单信息</span></div>
                               <div className="dingdan_qrtable" style={{marginTop: '0px'}}>
                                   <table cellSpacing="0" cellPadding="0" border="0" style={{marginTop:'0px',marginBottom:'0px'}}>
                                       <thead>
                                       <tr>
                                           <th>商品名称</th>
                                           <th>规格</th>
                                           <th>计费方式</th>
                                           <th>购买数量</th>
                                           <th>原价(元)</th>
                                       </tr>
                                       </thead>
                                       <tbody>
                                       <tr>
                                           <td>{goodName}</td>
                                           <td>1个月</td>
                                           <td>按月</td>
                                           <td>1</td>
                                           <td>￥{goodPrice}</td>
                                       </tr>
                                       </tbody>
                                   </table>
                                   <span>友情提示：如需开具发票，请咨询400-6032-580</span>
                               </div>
                               <div className="dingdan_qrtitle dingdan_newqrtitle" style={{paddingLeft:"0"}}>
                                   <div className="dingdan_qrzonge">应付总额：<b>¥{goodPrice}</b></div>
                               </div>
                               <div className="dingdan_xieyi_frame">
                                   <div className="dingdan_xieyi">
                                       <Checkbox onChange={this.onChange.bind(this)}>我已阅读<span style={{color:"#2b96f1"}}>Octupus电商平台购买协议</span></Checkbox>
                                   </div>
                               </div>
                               <div className="dingdan_xieyi_frame">
                                   <div className="dingdan_xieyi">
                                       <Button type="primary" size="large" onClick={this.changeNum.bind(this)}>提交订单</Button>
                                   </div>
                               </div>
                           </div>
                        )
                    }
                    {
                        this.state.num === 1 &&(
                            <div className="dingdan_wk">
                                <h2 className="content_title">订单提交成功</h2>
                                <p className="dingdan_zfxx">
                                    <b>订单号:</b><em>{this.state.Number}</em>
                                    <b>订单总价：</b><em>￥199.00</em>
                                </p>
                                <h2 className="content_title">订单支付</h2>
                                <div className="dingdan_wyzf">
                                    <h5>选择支付方式</h5>
                                    <div>
                                        <RadioGroup onChange={this.onChangeRadio.bind(this)}>
                                            <Radio value={1}>
                                                <img src={alipay} alt=""/>
                                            </Radio>
                                            <Radio value={2}>
                                                <img style={{width:"110px"}} src={wechat} alt=""/>
                                            </Radio>
                                            <Radio value={3}>
                                                <img src={union} alt=""/>
                                            </Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                                <div className="dingdan_xieyi_frame">
                                    <div className="dingdan_xieyi">
                                        <Button type="primary" size="large" onClick={this.sendPay.bind(this)}>下一步</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Pay;
