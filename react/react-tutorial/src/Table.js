import React, { Component } from 'react';

class Table extends Component {
  render(){
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>Genji</td>
              <td>C</td>
            </tr>
            <tr>
              <td>Hanzo</td>
              <td>C</td>
            </tr>
            <tr>
              <td>D.va</td>
              <td>T</td>
            </tr>
            <tr>
              <td>Ash</td>
              <td>C</td>
            </tr>
          </tbody>
      </table>
    )
  }
}

export default Table;