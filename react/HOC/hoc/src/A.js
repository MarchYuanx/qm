import React, { Component } from 'react';

function A(Wrapper){
  return class Text extends Component {
    render(){
      return (
        <div>
          <p>something enhanced</p>
          <Wrapper/>
        </div>
      )
    }
  }
}

export default A;