import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

// HelloWorld Component
// class HelloWorld extends React.Component {
//   render () {
//     // return (
//     //   <h1>D.va</h1>
//     // )

//     return React.createElement("div",null,React.createElement("p",null,"宋哈娜"))
//   }
// }

// HelloUser Component
// class HelloUser extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       username: 'overwatch'
//     }  
   
//     // setTimeout(()=>{
//     //   this.setState({
//     //     username: 'blackwatch'
//     //   })  
//     // },2000)

//     // 绑定 1 
//     // this.handleChange = this.handleChange.bind(this);


//   }
  
//   handleChange(e){
//     console.log(e.target.value);
//     this.setState({
//       username: e.target.value
//     })  
//   }
  

//   render(){
//     return (
//       <div id="container">
//         Hello {this.state.username} 
        
//         <input type="text" value={this.state.username} onChange={(e)=>{this.handleChange(e)}}/>
//       </div>
      
//     )
//   }

// }

ReactDOM.render(<App/>,document.getElementById('root'));