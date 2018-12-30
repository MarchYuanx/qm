import React from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
// import PropTypes from 'prop-types';
// import { createStore, storeChange } from './redux'

// 在组件中static 一定要给他传参

export default class App extends React.Component {
  render () {
    return (
      <div className="App">
        <Head/>
        <Body/>
      </div>
    )  
  }
}

