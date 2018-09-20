/*
 * @Author: zhongxd 
 * @Date: 2018-09-20 13:47:56 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-20 14:32:24
 */

 import React from 'react';
 import {Card, Button,message,Form,Select,Table,Modal} from 'antd';

 class Order extends React.Component{

  state = {

  }
  render(){
    const columns = [
       {
         title:"订单编号",
         dataIndex:"order_sn"
       },
       {
        title:"车辆编号",
        dataIndex:"bike_sn"
       },
       {
        title:"用户名",
        dataIndex:"user_name"
       },
       {
        title:"手机号码",
        dataIndex:"mobile"
       },
       {
        title:"里程",
        dataIndex:"distance"
       },
    ];

    return(
      <div>
        <Card>
          <FilterForm />
        </Card>
        <Card style={{marginTop:10}}>
          <Button>订单详情</Button>
          <Button>结束订单</Button>
        </Card>
        <div>
          <Table></Table>
        </div>
      </div>
    )
  }
 }

 class FilterForm extends React.Component{

  render(){
    return(
      <div></div>
    )
  }
 }