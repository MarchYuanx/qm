import React, { Component } from 'react';
import B from './B';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h3>高阶组件理解</h3>
          <B/>
        </div>
      </div>
    );
  }
}

export default App;
