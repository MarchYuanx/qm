import React from 'react'

const TableBody = (props) => {
  console.log('---TB---')
  console.log('[props]',props)
  const rows = props.Tb_characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
        <td>
          <a className="btn btn-primary" href="javascript:;" onClick={()=>props.Tb_removeCharacter(index)}>
          删除</a>
        </td>
      </tr>
    )
  })

  return(
    <tbody>{rows}</tbody>
  )
}


// class TableBody extends Component {
//   render() {
//     return (
//       <thead>

//       </thead>
//     )
//   }
// }

export default TableBody;