import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
  render() {
    return(
      <div>
        This is Main page
        <br/>
        <Link to="/main/test">Main test</Link>
        <br/>
        <Link to="/main/march">Main march </Link>
        <br/>
        <Link to="/main/6324">Main 6324 </Link>
        {this.props.children}
      </div>
    )
  }
}