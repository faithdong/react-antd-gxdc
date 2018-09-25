/*
 * @Author: zhongxd 
 * @Date: 2018-09-20 13:47:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-25 15:16:45
 */

import React from 'react';
import { Card, Button, message, Form, Select, Table, Modal, DatePicker } from 'antd';
import axios from './../../axios';
import Utils from './../../utils/utils';
import BaseFrom from '../../components/BaseForm'

const FormItem = Form.Item;
const Option = Select.Option;


class Order extends React.Component {

  state = {}
  params = {
    page: 1
  }

  formList = [
    {
      type:'SELECT',
      label:'城市',
      field:'city',
      placeholder:'全部',
      initialValue:'1',
      width:100,
      list:[{id:'0',name:'全部'},{id:'1',name:'北京'},{id:'2',name:'天津'},{id:'3',name:'上海'}]
    },
    {
      type:'时间查询',

    },
    {
      type:'SELECT',
      label:'订单状态',
      field:'order_status',
      placeholder:'全部',
      initialValue:'1',
      width:100,
      list:[{id:'0',name:'全部'},{id:'1',name:'进行中'},{id:'2',name:'结束行程'}]
    }
  ];
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

  handleFilter = (params) => {
    this.params = params;
    this.requestList();
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
          <BaseFrom formList={this.formList} filterSubmit={this.handleFilter}></BaseFrom>
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