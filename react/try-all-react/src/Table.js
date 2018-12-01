import React ,{Component} from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'


class Table extends Component {
  render() {
    const {characterData, removeCharacter} = this.props


    return (
      <table className="table table-striped">
        <TableHeader/>
        <TableBody Tb_characterData={characterData} Tb_removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

export default Table;