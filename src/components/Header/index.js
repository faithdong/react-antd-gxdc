/*
 * @Author: zhongxd 
 * @Date: 2018-09-11 16:20:36 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-21 13:52:14
 */

import React from 'react';
import { Row, Col } from 'antd';
import './index.less';
import Utils from '../../utils/utils';
import Axios from '../../axios';
export default class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.setState({ userName: "zhongxd" });
    setInterval(() => {
      let sysTime = Utils.formateDate(new Date().getTime());
      this.setState({ sysTime: sysTime });
    }, 1000);
    this.getWeatherAPIData();
  }
  getWeatherAPIData() {
    let city = '成都';
    Axios.jsonp(
      { url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2' }
    ).then((res) => {
      if (res.status === "success") {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        });
      }
    });
  }
  render() {
    const { menuName, menuType } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
          {
            menuType ?
              <Col span="6" className="logo">
                <img src="/assets/logo-ant.svg" alt="" />
                <span>IMooc 通用管理系统</span>
              </Col> : ''
          }
          <Col span={menuType ? 18 : 24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="">退出</a>
          </Col>
        </Row>
        {
          menuType ? '' :
            <Row className="breadcrumb">
              <Col span="4" className="breadcrumb-title">
                {menuName || '首页'}
              </Col>
              <Col span="20" className="weather">
                <span className="date">{this.state.sysTime}</span>
                <span className="weather-img">
                  <img src={this.state.dayPictureUrl} alt="" />
                </span>
                <span className="weather-detail">
                  {this.state.weather}
                </span>
              </Col>
            </Row>
        }
      </div>
    )
  }
}