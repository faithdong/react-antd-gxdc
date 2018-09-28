/*
 * @Author: zhongxd 
 * @Date: 2018-09-11 16:23:55 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-27 16:46:28
 */


import React from 'react';
import { Menu } from 'antd';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMenu } from './../../redux/action';
import MenuConfig from './../../config/menuConfig';
import './index.less';

const SubMenu = Menu.SubMenu;
class NavLeft extends React.Component {
  state = {
    currentKey:''
  };
  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    let currentKey = window.location.hash.replace(/#|\?.*$/g,'');
    this.setState({ menuTreeNode,currentKey });
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  handleClick = ({item}) => {
    const { dispatch } = this.props;
    dispatch(switchMenu(item.props.title));
    console.log(item);
    this.setState({currentKey:item.key});
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.currentKey]} 
          theme="light">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft);