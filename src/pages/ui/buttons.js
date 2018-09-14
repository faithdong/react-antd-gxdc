import React from 'react';
import { Card , Button ,Icon,Radio } from 'antd';
import './ui.less';

export default class Buttons extends React.Component{
  state = {
    loading:true,
    size: 'large',
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleCloseLoading = () =>{
    this.setState({
      loading:false
    });
  }

  render(){
    const ButtonGroup = Button.Group;
    const size = this.state.size;
    return(
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="dashed" disabled>Dashed(disabled)</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search">搜索</Button>
          <Button icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="card-wrap">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading}>点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className="card-wrap">
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />返回
            </Button>
            <Button type="primary">
              前进<Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
            <Button type="primary" size={size}>Primary</Button>
            <Button size={size}>Normal</Button>
            <Button type="dashed" size={size}>Dashed</Button>
            <Button type="danger" size={size}>Danger</Button>
          </Radio.Group>
        </Card>
      </div>
    )
  }
}