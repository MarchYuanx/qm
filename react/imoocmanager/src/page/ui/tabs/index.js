import React from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import '../ui.less';
import './index.less';

const TabPane = Tabs.TabPane;

export default class MyTabs extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' , closable: false},
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3' }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }
  onChange = (activeKey) => {
    this.setState({ activeKey });
  }

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  }

  remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }

  handleCallback = (key)=>{
    message.success("Now key is "+ key)
  }
  render () {
    return (
      <div>
        <Card title="Tab页签" className="card"> 
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">React Antd 1</TabPane>
            <TabPane tab="Tab 2" key="2">React Antd 2</TabPane>
            <TabPane tab="Tab 3" key="3">React Antd 3</TabPane>
          </Tabs>     
        </Card>
        <Card title="Tab页签(Icon)" className="card"> 
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus"></Icon>plus</span>} key="1">React Antd plus</TabPane>
            <TabPane tab={<span><Icon type="edit"></Icon>edit</span>}  key="2">React Antd edit</TabPane>
            <TabPane tab={<span><Icon type="delete"></Icon>delete</span>}  key="3" disabled>React Antd delete</TabPane>
          </Tabs>     
        </Card>
        <Card title="Tab页签(editable)" className="card">
          <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          >
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
          </Tabs>
        </Card>
      </div>
    )
  }
}