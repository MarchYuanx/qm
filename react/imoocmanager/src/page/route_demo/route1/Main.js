import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
  render() {
    return(
      <div>
        main page
        <hr/><hr/>
        <ul>
            <li>
              <Link to="/main/a">Main A</Link>
            </li>
            <li>
              <Link to="/main/b">Main B</Link>
            </li>     
          </ul>
          {this.props.children}
      </div>
    )
  }
}