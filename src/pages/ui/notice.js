/*
 * @Author: zhongxd 
 * @Date: 2018-09-14 17:22:38 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-14 17:28:58
 */

 import React from 'react';
 import { Card , Button , notification } from 'antd';
 import './ui.less';

 export default class Notice extends React.Component{

  openNotificationWithIcon = (type) =>{
    notification[type]({
      message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
}

  render(){
    return(
      <div>
        <Card className="card-wrap">
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </Card>
      </div>
    );
  }
 }