import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component{
  render() {
    return(
      <div>
        This is Info page
        <br/>
        Id: {this.props.match.params.id}
      </div>
    )
  }
}