import React, { Component } from 'react';
import Modal from './modal/modal'
import './App.css';

class App extends Component {
  state = {
    visible: false
  }
  showModal = ()=>{
    this.setState({
      visible: true
    })
  }
  render() {
    const { visible } = this.state;
    return (
      <div className="App">
        <button onClick={this.showModal}>click here</button>
        <Modal title="March" visible={visible}>Yuanx Coooooool</Modal>
      </div>
    );
  }
  
  onClose = ()=>{
    console.log('通知了父组件 关闭了')
  }
  confirm = ()=>{
    console.log('通知了父组件 确定了')
  }
 
}

export default App;
