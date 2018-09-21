/*
 * @Author: zhongxd 
 * @Date: 2018-09-21 11:04:26 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-21 14:35:45
 */


import React from 'react';
import { Row } from 'antd';
import Header from './components/Header';
import './style/common.less';


export default class Common extends React.Component {

  render() {
    return (
      <div>
        <Row className="simple-page">
          <Header menuType="second" />
        </Row>
        <Row className="content">
          {this.props.children}
        </Row>
      </div>
    )
  }
}