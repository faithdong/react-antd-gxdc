/*
 * @Author: zhongxd 
 * @Date: 2018-09-20 13:47:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-21 11:29:13
 */

import React from 'react';
import { Card, Button, message, Form, Select, Table, Modal, DatePicker } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;


class Order extends React.Component {

  state = {

  }
  params = {
    page: 1
  }
  componentWillMount() {
    this.requestList();
  }
  requestList = () => {
    let _this = this;
    axios.ajax({
      url: '/order/list',
      data: {
        params: {
          page: this.params.page
        }
      }
    }).then((res) => {
      let list = res.result.item_list.map((item, index) => {
        item.key = index;
        return item;
      });
      this.setState({
        list: list,
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current;
          _this.requestList();
        })
      })
    })
  }

  onRowClick = (record, index) => {
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  //订单详情
  openOrderDetail = (e) => {
    e.preventDefault();
    let item = this.state.selectedItem;
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请先选择一条订单'
      })
      return;
    }
    window.open(`/#/common/order/detail/${item.id}`, '_blank');
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: "订单编号",
        dataIndex: "order_sn"
      },
      {
        title: "车辆编号",
        dataIndex: "bike_sn"
      },
      {
        title: "用户名",
        dataIndex: "user_name"
      },
      {
        title: "手机号码",
        dataIndex: "mobile"
      },
      {
        title: "里程",
        dataIndex: "distance"
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      }
    ];
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div>
        <Card>
          <Form layout="inline">
            <FormItem label="城市">
              {
                getFieldDecorator('city_id')(
                  <Select
                    style={{ width: 100 }}
                    placeholder="全部"
                  >
                    <Option value="">全部</Option>
                    <Option value="1">北京市</Option>
                    <Option value="2">天津市</Option>
                    <Option value="3">深圳市</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="订单时间">
              {
                getFieldDecorator('start_time')(
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                )
              }
              {
                getFieldDecorator('end_time')(
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                )
              }
            </FormItem>
            <FormItem label="订单状态">
              {
                getFieldDecorator('city_id')(
                  <Select
                    style={{ width: 100 }}
                    placeholder="全部"
                  >
                    <Option value="">全部</Option>
                    <Option value="1">进行中</Option>
                    <Option value="2">行程中</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem>
              <Button type="primary" style={{ margin: '0 20px' }}>查询</Button>
              <Button>重置</Button>
            </FormItem>
          </Form>
        </Card>
        <Card style={{ marginTop: 10 }}>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button>结束订单</Button>
        </Card>
        <div>
          <Table columns={columns} dataSource={this.state.list} rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }
              };
            }}></Table>
        </div>
      </div>
    )
  }
}




export default Order = Form.create()(Order);