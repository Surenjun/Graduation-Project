import React, {Component} from 'react';
import "../Header/Header.css"
import "./css.css"
import StepNum from "./Step";
import { Checkbox ,Button , Radio ,message} from 'antd';

import alipay from "../img/alipay.png"
import union from "../img/union.png"

const RadioGroup = Radio.Group;

let {goodName ,goodPrice,goodId} = ["","",""];
class Pay extends Component {
    componentWillMount() {
        goodName = this.props.location.state.goodName;
        goodPrice = this.props.location.state.goodPrice;
        goodId = this.props.location.state.goodId;
    }

    state = {
        num : 0,
        ifNotice:false
    };
    changeNum(){
        if(this.state.ifNotice){
            this.setState({num:1})
        }else{
            message.warning('请阅读购买协议');
        }
    }
    sendPay(){
        const hide = message.loading('正在支付..', 0);
        setTimeout(hide, 2500);
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
                                           <td></td>
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
                                    <b>订单号:</b><em>2019031897984850</em>
                                    <b>订单总价：</b><em>￥199.00</em></p>
                                <h2 className="content_title">订单支付</h2>
                                <div className="dingdan_wyzf">
                                    <h5>选择支付方式</h5>
                                    <div>
                                        <RadioGroup>
                                            <Radio value={1}>
                                                <img src={alipay} alt=""/>
                                            </Radio>
                                            <Radio value={2}>
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
