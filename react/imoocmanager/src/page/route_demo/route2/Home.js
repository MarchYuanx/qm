import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return (
        <div>
          <ul>
            <li>
              <Link to="/main">Home 2</Link>
            </li>
            <li>
              <Link to="/about">about 2</Link>
            </li>
            <li>
              <Link to="/topics">topics 2</Link>
            </li>      
          </ul>
          <hr/>
          {this.props.children}
        </div>
    );
  }
}