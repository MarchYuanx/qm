import React from 'react';
import { Button, Card, Icon, Radio } from 'antd';
import '../ui.less';
import './index.less';

export default class Buttons extends React.Component {
  state = {
    loading : true,
    size: 'default'
  }

  handleCloseLoading = () => {
    this.setState({
      loading : !this.state.loading
    })
  }

  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  render(){
    return (
      <div>
        <Card title="基础按钮" className="card">
          <Button type="primary">primary</Button>
          <Button type="ghost">ghost</Button>
          <Button type="default">default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button disabled>disabled</Button>
        </Card>
        <Card title="图形按钮" className="card">
          <Button icon="plus">plus</Button>
          <Button icon="edit">edit</Button>
          <Button icon="delete">delete</Button>
          <Button icon="search">search</Button>
          <Button shape="circle" icon="download"></Button>
          <Button type="primary" icon="download">download</Button>
        </Card>
        <Card title="Loading按钮" className="card">
          <Button type="primary" loading={this.state.loading}>Loading</Button>
          <Button type="primary" icon="download" loading={this.state.loading} shape="circle"></Button>
          <Button loading={this.state.loading}>Loading</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>switch</Button>
        </Card>
        <Card title="按钮组" className="card">
          <Button.Group>
            <Button type="primary" style={{marginRight: 0}}>
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">small</Radio>
            <Radio value="default">default</Radio>
            <Radio value="large">large</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>size</Button>
          <Button type="ghost" size={this.state.size}>size</Button>
          <Button type="danger" size={this.state.size}>size</Button>
          <Button type="dashed" size={this.state.size}>size</Button>
        </Card>
      </div>
    )
  }
}