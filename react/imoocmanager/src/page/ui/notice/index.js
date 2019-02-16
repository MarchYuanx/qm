import React from 'react';
import { Button, Card, notification } from 'antd';
import '../ui.less';


export default class Notice extends React.Component {
  
  openNotification = (type, placement) => {

    if(placement){
      notification[type]({
        placement:placement,
        message: 'Antd message',
        description: '本月工资18k 奖金6k 实发工资24k',
      })  
      return ;
    }
    notification[type]({
      message: 'Antd message',
      description: '本月工资18k 奖金6k 实发工资24k'
    })
  }
  render () {
    return (
      <div>
        <Card title="通知提醒框" className="card"> 
          <Button type="primary" onClick={()=>this.openNotification('success')}>success</Button>
          <Button type="primary" onClick={()=>this.openNotification('info')}>info</Button>
          <Button type="danger" onClick={()=>this.openNotification('warning')}>warning</Button>
          <Button type="danger" onClick={()=>this.openNotification('error')}>error</Button>
        </Card>
        <Card title="通知提醒框(placement)" className="card"> 
          <Button type="primary" onClick={()=>this.openNotification('success','topLeft' )}>topLeft</Button>
          <Button type="primary" onClick={()=>this.openNotification('info','topRight')}>topRight </Button>
          <Button type="danger" onClick={()=>this.openNotification('warning','bottomLeft')}>bottomLeft</Button>
          <Button type="danger" onClick={()=>this.openNotification('error','bottomRight')}>bottomRight</Button>
        </Card>
      </div>
    )
  }
}