import React, { Component } from 'react';
import Table from './Table'
import Form from './Form'


import './App.css';

class App extends Component {
  state = {
    characters : [
      {
        'name':'源氏',
        'type':'突击'
      },{
        'name':'莫伊拉',
        'type':'支援'
      },{
        'name':'查莉娅',
        'type':'重装'
      }
      ,{
        'name':'谭雅塔',
        'type':'支援'
      }
    ]
  }

  componentDidMount(){
    const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*`;
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          data: result
        })

      })
  }
  

  render() {
    
    const {characters} = this.state;

    return (
      <div className="container">
        <h1 id="dva">Over Watch</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }

  removeCharacter = (index) => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (character)=>{
    this.setState({
      characters: [character,...this.state.characters]
    })
  }
}

export default App;
