/*
 * @Author: zhongxd 
 * @Date: 2018-09-11 16:07:10 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-14 11:08:14
 */

import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
//import Home from './pages/home/';
//import Home from './pages/route_demo/route1/Home';
//import Home from './pages/route_demo/route2/router';

export default class Admin extends React.Component {

  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft></NavLeft>
        </Col>
        <Col span={20} className="main">
          <Header>

          </Header>
          <Row className="content">
            {/* <Home /> */}
            {this.props.children}
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}