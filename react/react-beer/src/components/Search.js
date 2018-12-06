import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Search extends Component{
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  searchRef = React.createRef()
  handleSubmit = (e)=>{
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;
    console.log(searchTerm)
    console.log(this.context.router)
    this.context.router.history.push(`/search/${searchTerm}`);
    console.log(this.context.router.history)
  }


  render () {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Nano cola"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}


export default Search;