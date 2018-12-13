import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Detail from './Detail'
import Loader from './Loader';

export default class Results extends Component {
  static propTypes = {
    beers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }
  render(){
    if(this.props.loading){
      return <Loader message="Beer run"/>;
    }
    return (
      <div className="result"> 
        <div className="beers">
          {
            this.props.beers.map((beer, i) => (
              <Detail beer={beer} key={i}/>)
            )
          }
        </div>
      </div>
    )
  }
}

