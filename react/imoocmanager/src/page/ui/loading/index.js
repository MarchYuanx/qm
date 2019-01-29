import React from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import '../ui.less';
import './index.less';

export default class Loading extends React.Component {
  render() {
    const icon = <Icon type="loading" style={{fontSize: 24}}/>
    return (
      <div>
        <Card title="Spin Loading" className="card">
          <Spin size="small" style={{marginRight: 20}}/>
          <Spin size="default" style={{marginRight: 20}}/>
          <Spin size="large" style={{marginRight: 20}}/>
          <Spin indicator={icon}/>
        </Card>
        <Card title="内容遮罩" className="card">
          <Alert
            message="Antd Alert"
            description="Welcome to React "
            type = "info"
          />
          <Spin tip="loading">
            <Alert
              message="Antd Alert"
              description="Welcome to React "
              type = "warning"
            />
          </Spin>
          <Spin tip="loading" indicator={icon}>
            <Alert
              message="Antd Alert"
              description="Welcome to React "
              type = "success"
            />
          </Spin>
        </Card>
      </div>
    )
  }
}