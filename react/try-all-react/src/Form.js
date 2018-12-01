import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();
    this.initialState = {
      name: '',
      type: '',
    };
    this.state = this.initialState;
  }
  render() {
    const {name ,type} = this.state;
    return(
      <form className="form-group">
        <div className="form-field">
          <label >Name</label>
          <input className="form-control" type="text" name="name"    
          value={name} onChange={this.handleChange} />         
        </div>
        <div className="form-field">
          <label >Type</label>
          <input className="form-control" type="text" name="type"         
          value={type} onChange={this.handleChange} />         
        </div>
        <div className="form-field">
          <input type="button" value="Submit" onClick={()=>{this.submitForm()}}/>
          {/* ()=>{this.submitForm()} */}
        </div>
      </form>
    )
  }

  submitForm = ()=>{
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  handleChange = event => {
    console.log(event.target)
    const {name, value} = event.target
    console.log('[e_n]',name)
    console.log('[e_v]',value)
    this.setState({
      [name]: value,
    })


  }
}

export default Form