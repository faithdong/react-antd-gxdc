/*
 * @Author: zhongxd 
 * @Date: 2018-09-11 16:20:36 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-12 23:08:04
 */

import React from 'react';
import { Row ,Col } from 'antd';
import './index.less';
import Utils from '../../utils/utils';
export default class Footer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName:'',
      sysTime:''
    }
  }
  componentWillMount(){
    this.setState({userName:"zhongxd"});
    setInterval( () => {
      let sysTime = Utils.formateDate(new Date().getTime());
      this.setState({sysTime:sysTime});
    },1000);
  }
 render(){
   return(
     <div className="header"> 
       <Row className="header-top">
         <Col span="24">
          <span>欢迎，{this.state.userName}</span>
          <a href="#">退出</a>
         </Col>
       </Row>
       <Row className="breadcrumb">
        <Col span="4" className="breadcrumb-title">
          首页
        </Col>
        <Col span="24" className="weather">
          <span className="date">{this.state.sysTime}</span>
          <span className="weather-detail">地震</span>
        </Col>
       </Row>
     </div>
   )
 }
}