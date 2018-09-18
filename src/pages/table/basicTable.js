/*
 * @Author: zhongxd 
 * @Date: 2018-09-18 10:11:41 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-18 14:46:51
 */

import React from 'react';
import { Card, Table } from 'antd';
import axios from 'axios';

export default class BasicTable extends React.Component {
 
  state = {
    dataSource2:[]
  };

  componentWillMount() {
    const data = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
    ]
    this.setState({ dataSource: data });
    this.request();
  }


  request = () =>{
    let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
    axios.get(baseApi+'/table/list').then((res)=>{
      //console.log(JSON.stringify(res));
      if(res.status === 200 && res.data.code === 0){
        this.setState({dataSource2:res.data.result.list});
      }
    })
  }

  render() {
    const columns = [
      {
        title: 'id',
        key: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        key: 'userName',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        key: 'sex',
        dataIndex: 'sex',

      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',

      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',

      },
      {
        title: '生日',
        key: 'birthday',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        key: 'address',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        key: 'time',
        dataIndex: 'time'
      }
    ]

    return (
      <div>
        <Card title="基础表格" className="card-wrap">
          <Table dataSource={this.state.dataSource} columns={columns}></Table>
        </Card> 

        <Card title="动态渲染表格" style={{ marginTop: 10 }}>
          <Table columns={columns} dataSource={this.state.dataSource2}></Table>
        </Card>
      </div>
    )
  }
}