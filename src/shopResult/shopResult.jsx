import React, {Component} from 'react';
import "./css.css"

import { Row, Col,Select,Input ,Table } from 'antd';
const  axios = require("axios");
const Search = Input.Search;
const Option = Select.Option;


class shopResult extends Component {
    state = {
        value:null,
        data: [],
        pagination: {showSizeChanger:true ,onShowSizeChange:this.onShowSizeChange.bind(this)},
        loading: false,
        pageSize:10,
    };
    onShowSizeChange(current, pageSize) {
        this.setState({
            pageSize:pageSize
        })
        this.getData(this.state.value ,  current , pageSize)
    }
    getData(value ,current = 1 ,pageSize = 10){
        const _this = this;
        this.setState({value:value});
        this.setState({ loading: true });
        axios.get('https://console.moojing.com/api/items/search', {
            params: {
                q : encodeURI(value),
                page : current,
                page_size : pageSize
            }
        }).then(function (response) {
            const count = response.data.result.count;
            const pagination = { ..._this.state.pagination };
            pagination.total = count;
            const data = response.data.result.data;
            data.forEach((item,key) =>{
                item.image =  <img style={{width:"50px"}} src={item.item_image}/>;
                item.shop_title =  <span style={{color: '#1890ff'}}>{item.shop_title}</span>;
                item.key = (current - 1 ) * pageSize + key + 1;
                item._price = item.price;
                item.price = <span style={{color: 'red'}}>￥{item.price}</span>
            });
            _this.setState({
                loading: false,
                data: response.data.result.data,
                pagination,
            });
        }).catch(function (error) {
            console.log(error);
        });

    }
    handleChange(pagination) {
        let current =  pagination.current ;
        this.getData(this.state.value, current ,this.state.pageSize)
    };
    render() {

        const columns = [{
            title: '序号',
            dataIndex: 'key',
            key: 'key',
        }, {
            title: '宝贝图片',
            dataIndex: 'image',
            key: 'image',
        }, {
            title: '宝贝标题',
            dataIndex: 'item_title',
            key: 'item_title',
        }, {
            title: '所在店铺',
            dataIndex: 'shop_title',
            key: 'shop_title',
        },{
            title: '价格',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => {
                console.log(a.price);
                return a._price  - b._price
            }
        },{
            title: '月销量',
            dataIndex: 'sold',
            key: 'sold',
            sorter: (a, b) => a.sold- b.sold,
        },{
            title: '店铺等级',
                dataIndex: 'shop_level',
                key: 'shop_level',
                sorter: (a, b) => a.shop_level - b.shop_level,
        }];

        return (
            <>
                <div id="shopResult">
                    <Select defaultValue="getItem"  size="large" style={{ width: 80}}>
                        <Option value="getShop" disabled>店铺</Option>
                        <Option value="getItem">商品</Option>
                    </Select>

                    <Search style={{width:"800px",height:"80px",marginLeft:"5px"}}
                            placeholder="请输入"
                            allowClear
                            onSearch={value => this.getData(value)}
                            enterButton
                            size="large"
                    />
                </div>

                <Row type="flex" justify="center">
                    <Col span={22}>
                        <div id="table-data">
                            <Table columns={columns}
                                   loading={this.state.loading}
                                   dataSource={this.state.data}
                                   pagination={this.state.pagination}
                                   showSizeChanger
                                   onChange={this.handleChange.bind(this)} />
                        </div>
                    </Col>
                </Row>

            </>



        );
    }
}

export default shopResult;
