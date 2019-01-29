import React from 'react';
import { Button, Card, message } from 'antd';
import '../ui.less';
import './index.less';

export default class Message extends React.Component {
  showMessage = (type)=>{
    message[type]("Congratulations")
  }
  render () {
    return (
      <div>
        <Card title="全局提示框" className="card"> 
          <Button type="primary" onClick={()=>this.showMessage('success')}>success</Button>
          <Button type="primary" onClick={()=>this.showMessage('info')}>info</Button>
          <Button type="danger" onClick={()=>this.showMessage('warning')}>warning</Button>
          <Button type="danger" onClick={()=>this.showMessage('error')}>error</Button>
        </Card>
      </div>
    )
  }
}