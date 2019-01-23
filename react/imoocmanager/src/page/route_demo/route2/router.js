import React from 'react';
import { HashRouter as Router,Route } from 'react-router-dom';
import Home from './Home'
import Main from './Main'
import About from './../route1/About'
import Topics from './../route1/Topics'

export default class MyRouter extends React.Component{
  render(){
    return( 
      <Router>
        <Home>
          <Route path="/main" component={Main}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
        </Home>
      </Router>
      
    )
  }
}