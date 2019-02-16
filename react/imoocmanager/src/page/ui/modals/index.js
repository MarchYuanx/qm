import React from 'react';
import { Button, Card, Modal } from 'antd';
import '../ui.less';

export default class Buttons extends React.Component {
  state = {
    showModal1: false,
    showModal2: false,
    showModal3: false,
    showModal4: false
  }
  handleOpen = (type) => {
    this.setState({
      [type]: true
    })
  }
  handleComfirm = (type) => {
    Modal[type]({
      title: '确定?',
      content: '你确定你学会了React了吗',
      maskClosable: true,
      onOk(){
        console.log('ok')
      },
      onCancel(){
        console.log('Cancel')
      }

    })
  }
  render () {
    return (
      <div>
        <Card title="基础模态框" className="card">
          <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>open</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>custom</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>top 20px</Button>
          <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>centered</Button>
        </Card>

        <Card title="信息确认框" className="card">
          <Button type="primary" onClick={()=>this.handleComfirm('confirm')}>confirm</Button>
          <Button type="primary" onClick={()=>this.handleComfirm('info')}>info</Button>
          <Button type="primary" onClick={()=>this.handleComfirm('success')}>success</Button>
          <Button type="danger" onClick={()=>this.handleComfirm('warning')}>warning</Button>
          <Button type="danger" onClick={()=>this.handleComfirm('error')}>error</Button>
        </Card>

        <Modal
          title="React Modal"
          visible={this.state.showModal1}
          onOk={()=>{
            this.setState({
              showModal1: false
            })
          }}
          onCancel={()=>{
            this.setState({
              showModal1: false
            })
          }}
        >
          <p>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
          另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。</p>
        </Modal>

        <Modal
          title="React Modal"
          visible={this.state.showModal2}
          okText="YES"
          cancelText="NO"
          onOk={()=>{
            this.setState({
              showModal2: false
            })
          }}
          onCancel={()=>{
            this.setState({
              showModal2: false
            })
          }}
        >
          <p>Custom footer</p>
        </Modal>

        <Modal
          title="React Modal"
          style={{top:20}}
          visible={this.state.showModal3}
          onOk={()=>{
            this.setState({
              showModal3: false
            })
          }}
          onCancel={()=>{
            this.setState({
              showModal3: false
            })
          }}
        >
          <p>Open a React Modal.</p>
        </Modal>

        <Modal
          title="React Modal"
          visible={this.state.showModal4}
          wrapClassName="vertical-center-modal"
          onOk={()=>{
            this.setState({
              showModal4: false
            })
          }}
          onCancel={()=>{
            this.setState({
              showModal4: false
            })
          }}
        >
          <p>Centered React Modal.</p>
        </Modal>
      </div>
    )
  }
}