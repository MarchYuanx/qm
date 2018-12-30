import React from 'react';
import { connect } from '../../redux';
import PropTypes from 'prop-types';

class Head extends React.Component {

  // static contextTypes = {
  //   store: PropTypes.object,
  //   dispatch: PropTypes.func,
  //   subscribe: PropTypes.func, 
  //   getStore: PropTypes.func
  // }
  // constructor(props){
  //   super(props)
  //   this.state = {};
  // }
  // componentWillMount = () => {
  //   const { subscribe } = this.context;
  //   this._upState();

  //   subscribe(()=> this._upState())
  // }
  // _upState() {
  //   const { getStore, dispatch } = this.context;

  //   this.setState({
  //     ...getStore(),
  //     dispatch
  //   })
  // }

  // 封装出connect
  // {this.state.head} => {this.props.head} 
  render() {
    return (
      <div>
        <div className="head">{this.props.head}</div> 
      </div>
    )
  }
}

const propsTypes = {
  store: PropTypes.object
}

export default connect(Head, propsTypes)