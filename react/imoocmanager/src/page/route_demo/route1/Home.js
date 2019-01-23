import React from 'react';
import { HashRouter , Route , Link, Switch } from 'react-router-dom';
import Main from './Main'
import About from './About'
import Topics from './Topics'

export default class Home extends React.Component{
  render(){
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/main">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/topics">topics</Link>
            </li>      
          </ul>
          <hr/>

            <Route path="/main" render={()=>
              <Main>
                <Route path="/main/a" component={About}></Route>
                <Route path="/main/b" component={Topics}></Route>
              </Main>
            }>

            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
          
        </div>
      </HashRouter>
    );
  }
}