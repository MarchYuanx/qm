import React, { Component } from 'react';
import { connect } from '../../redux';
//import PropTypes from 'prop-types';

class Button extends Component {
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

  //   subscribe(() => this._upState())
  // }
  // _upState() {
  //   const { getStore, dispatch } = this.context;

  //   this.setState({
  //     ...getStore(),
  //     dispatch
  //   })
  // }

  changeContext = (type)=>{
    const { dispatch } = this.props;
    //const key = type === 'HEAD'? 'head':'body';
    dispatch({
      type: type,
      //[key]: `我是修改后的${key}`,
      payload: `我是修改后的${type}`
    })
  }

  render () {
    return (
      <div className="button">
        <div className="btn" onClick={()=>this.changeContext('HEAD')}>{this.props.headBtn}</div>
        <div className="btn" onClick={()=>this.changeContext('BODY')}>{this.props.bodyBtn}</div>
      </div>
    )
  }
}
export default connect(Button)