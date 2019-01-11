import React, { Component } from 'react';
import './App.css'
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
  render () {
    return (
      <Provider store={store}>  
        <div><h3>May J Lee</h3></div>
      </Provider>
    )
  }
}

export default App;