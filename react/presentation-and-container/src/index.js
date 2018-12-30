import React from 'react';
import ReactDOM from 'react-dom';

var Store = {
  _handlers: [],
  _flag: false,
  subscribe: function(handler) {
    this._handlers.push(handler);
  },
  set: function(value) {
    this._flag = value;
    this._handlers.forEach(handler => handler(value));
  },
  get: function() {
    return this._flag;
  }
}

function Switch({ value, onChange }) {
  return (
    <button onClick={()=>onChange(!value)}>
      {value ? 'light on':'light off'}
    </button>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: Store.get()
    }
    Store.subscribe((value)=>{
      this.setState({value})
    })
  }

  render () {
    return (
      <Switch
        value={this.state.value}
        onChange={Store.set.bind(Store)}
      />
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

