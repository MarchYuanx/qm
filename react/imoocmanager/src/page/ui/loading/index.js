import React from 'react';
import { Button, Card, Spin } from 'antd';
import '../ui.less';
import './index.less';

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <Card title="Spin Loading">
          <Spin/>
        </Card>
      </div>
    )
  }
}