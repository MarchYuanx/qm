import React, { Component } from 'react';
import {db, loadCollection } from '../database'
import Note from './Note'

// 支持离线的Web app 
class Notes extends Component {
  constructor(props){
    super(props);
    this.getInitialData();
  }
  state = {
    entities: []
  }
  getInitialData(){
    loadCollection('notes')
      .then(collection => {
        // collection.insert([
        //   {body: 'hello ~'},
        //   {body: 'greeting ~'},
        //   {body: '^_^ ~'}
        // ]);
        // db.saveDatabase();
        const entities = collection.chain().find()
          .simplesort('$loki','isdesc').data()

        this.setState({
          entities
        })

      })
  }

  render(){
    const entities = this.state.entities;
    const noteItems = entities.map(entity =>
      <Note key={entity .$loki} entity={entity}/>
    )

    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button" 
        onClick={this.createEntity}>添加笔记</button>
        <div className="ui divided items">
          {noteItems}
        </div>
      </div>
    )
  }
  createEntity = ()=>{
    console.log(this)
  }
}

export default Notes