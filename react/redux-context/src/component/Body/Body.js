import React, {Component} from 'react';
import Button from '../Button/Button';
import { connect } from '../../redux';
//import PropTypes from 'prop-types'

class Body extends Component {
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
  render () {
    return (
      <div>
        <div className="body">{this.props.body}</div>
        <Button/>
      </div>
    )
  }
}

export default connect(Body)