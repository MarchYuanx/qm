import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return (
        <div>
          <ul>
            <li>
              <Link to="/main">Home 3</Link>
            </li>
            <li>
              <Link to="/about">about 3</Link>
            </li>
            <li>
              <Link to="/topics">topics 3</Link>
            </li>    
            <li>
              <Link to="/404">404</Link>
            </li>      
          </ul>
          <hr/>
          {this.props.children}
        </div>
    );
  }
}