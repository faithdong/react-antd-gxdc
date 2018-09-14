import React from 'react';
import { Card , Spin , Button , Icon , Alert} from 'antd';
import './ui.less';


export default class Loadings extends React.Component{

  render(){
    const icon = <Icon type="loading" style={{fontSize:24}}/>
    const iconLoading = <Icon type="loading" style={{fontSize:24}}/>
    return(
      <div>
        <Card title="Spin的用法" className="card-wrap">
          <Spin size="small" />
          <Spin style={{margin:'0 10px'}} />
          <Spin size="large" />
          <Spin indicator={icon} style={{marginLeft:10}}/>
        </Card>
        <Card title="内容遮罩">
          <Alert message="react" description="我在学习React高级教程" type="info"/>
          <hr/>
          <Spin>
            <Alert message="使用Spin局部加载" description="我在学习React高级教程" type="warning"></Alert>
          </Spin>
          <hr/>
          <Spin tip="加载中...">
            <Alert message="使用Spin局部加载" description="我在学习React高级教程" type="error"></Alert>
          </Spin>
          <hr/>
          <Spin indicator={iconLoading}>
            <Alert message="使用Spin局部加载" description="我在学习React高级教程" type="success"></Alert>
          </Spin>
        </Card>
        
      </div>
    );
  }
}