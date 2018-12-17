import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


class LifeCycle extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      str: '你好',
      name: '没有账号'
    }   
    setTimeout(() => {
      this.setState({
        str: "5秒结束"
      })
    }, 2000);
  }

  componentDidUpdate(){
    console.log('component Did Update')
  }

  componentWillUpdate(){
    console.log('component Will Update');
  }

  componentWillMount(){
    console.log('component Will Mount');
  }

  componentWillUnmount(){
    console.log('component Will UnMmount');
  }

  componentWillReceiveProps(){
    console.log('-----------component Will Receive Props-----------')
  }

  // nextProps 新接受的 但不是页面上已有的
  shouldComponentUpdate(nextProps){
    console.log('should Component Update')
    console.log(this.props.num,' next ',nextProps.num)
    if(nextProps.num === this.props.num){
      return false
    }
    return true
  }

  componentDidMount(){
    console.log('component Did Mount');
    // UI ready 最快看到壳子 接着再取数据 不会阻塞界面
    fetch('https://api.github.com/users/MarchYuanx')
      .then(data => data.json())
      .then(data =>{
        this.setState({
          name: data.name
        })
      })
  }

  render(){
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{parseInt(this.props.num)}</h3>
        <span>
          <h3>{this.state.str}</h3>
        </span>
      </div>
      
    )
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    setTimeout(()=>{
      this.setState({
        num:22
      })
    },4000);

    setTimeout(()=>{
      this.setState({
        showLifeCycle: false
      })
    },8000)
  }
  state = {
    num:2,
    showLifeCycle: true
  }
  render(){
    if(!this.state.showLifeCycle)
      return <div>none</div>

    return(
      <LifeCycle num={this.state.num}/>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
