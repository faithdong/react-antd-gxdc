
/*
 * @Author: zhongxd 
 * @Date: 2018-09-18 10:11:41 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-18 14:46:51
 */

import React from 'react';
import { Card, Table , Modal , Button , message } from 'antd';
import axios from '../../axios/index';
import Utils from './../../utils/utils';

export default class BasicTable extends React.Component {

  state = {
    dataSource: [],
    dataSource2: []
  };

  params = {
    page:1
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
    ];
    //给data添加key
    data.map((item,index)=>{
      item.key = index;
    })
    this.setState({ dataSource: data });
    this.request();
  }

  onRowClick=(recode,index)=>{
     let selectKey = [index];
     Modal.info({
       title:'信息',
       content:`用户名 ${recode.userName}`
     })
     this.setState({selectedRowKeys:selectKey,selecteItem:recode});
  }


  request = () => {
    let _this = this; 
    axios.ajax({
      url: '/table/list',
      data: {
        params: {
          page: this.params.page
        },
      }
    }).then((res) => {
      if (res.code == 0) {
        res.result.list.map((item,index)=>{
          item.key = index;
        })
        this.setState({ 
          dataSource2: res.result.list,
          selectedRowKeys:[],
          selectedRows:null, 
          pagination:Utils.pagination(res,(current)=>{
            this.params.page = current;
            this.request();
          })
        });
      }
    })
  }

  handleDelete=(()=>{
    let rows = this.state.selectedRows;
    let ids = [];
    rows.map((item)=>{
      ids.push(item.id);
    });
    Modal.confirm({
      title:'删除提示',
      content:`您确定要删除这些数据 ${ids.join(',')}`,
      onOk:()=>{
        message.success('删除成功');
      }
    })
  })

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
        render(sex){
          return sex==1?"男":"女";
        }

      },
      {
        title: '状态',
        key: 'state',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'咸鱼一条',
            '2':'风华浪子',
            '3':'北大才子',
            '4':'百度FE',
            '5':'创业者'
          };
          return config[state];
        }

      },
      {
        title: '爱好',
        key: 'interest',
        dataIndex: 'interest',
        render(abc) {
          let config = {
              '1': '游泳',
              '2': '打篮球',
              '3': '踢足球',
              '4': '跑步',
              '5': '爬山',
              '6': '骑行',
              '7': '桌球',
              '8': '麦霸'
          };
          return config[abc];
        }
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
    ];
    
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      selectedRowKeys,
      type:"radio"
    };
    const rowCheckSelection = {
      type:"checkbox",
      selectedRowKeys,
      onChange:(selectedRowKeys,selectedRows)=>{
        this.setState({
            selectedRowKeys,
            selectedRows
        })
    }
    };
    return (
      <div>
        <Card title="基础表格" className="card-wrap">
          <Table dataSource={this.state.dataSource} columns={columns}></Table>
        </Card>

        <Card title="动态渲染表格-mock" style={{ marginTop: 10 }}>
          <Table columns={columns} dataSource={this.state.dataSource2}></Table>
        </Card>

        <Card title="mock-单选表格" style={{ marginTop: 10 }}>
          <Table  rowSelection={rowSelection} 
            columns={columns} 
            dataSource={this.state.dataSource2}
            onRow={ (record,index) =>{
              return {
                onClick:()=>{ //点击行
                  this.onRowClick(record,index);
                }
              }  
            }}>
          </Table>
        </Card>

        <Card title="mock-复选表格" style={{ marginTop: 10 }}>
          <div style={{ marginBottom: 10 }}>
            <Button type="primary" onClick={this.handleDelete}>删除</Button>
          </div>
          <Table  rowSelection={rowCheckSelection} 
            columns={columns} 
            dataSource={this.state.dataSource2}
            >
          </Table>
        </Card>

        <Card title="mock-表格分页" style={{ marginTop: 10 }}>
          <Table  columns={columns} 
            dataSource={this.state.dataSource2}
            pagination={this.state.pagination}
            >
          </Table>
        </Card>
      </div>
    )
  }
}