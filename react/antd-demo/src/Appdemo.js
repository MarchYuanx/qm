// import React, { Component } from 'react';
// import Button from 'antd/lib/button'
// import {Table, Form, Icon, Input} from 'antd'
// import './App.css';


// class App extends Component {
//   state = {
//     loading: false,
//     iconLoading: false,
//   }
//   enterLoading = () => {
//     this.setState({
//       loading: true
//     })
//   }
//   enterIconLoading = () => {
//     this.setState({
//       iconLoading: true
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//   }




//   render() {
//     const columns = [{
//       title: '姓名',
//       dataIndex: 'name',
//       key: 'name'
//     },{
//       title: '年龄',
//       dataIndex: 'age',
//       key: 'age'
//     },{
//       title: '住址',
//       dataIndex: 'address',
//       key: 'address'
//     }]
//     const dataSource = [{
//         name: '源氏',
//         age: 23,
//         address: '花村',
//         key:'genji'
//       },{
//         name: '半蔵',
//         age: 29,
//         address: '花村',
//         key:'hanzo'
//       },{
//         name: '宋哈娜',
//         age: 19,
//         address: '釜山',
//         key:'d.va'
//       }    
//     ]

//     const FormItem = Form.FormItem;
//     return (
//       <div> 

//         <Form layout="inline" onSubmit={this.handleSubmit}> 
//             <Input 
//               placeholder= "Username"            
//               prefix= {<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
//             />
//             <Input 
//               placeholder="Password"            
//               prefix= {<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
//             />
           
//             <Button type="primary" htmlType="submit" block>Login</Button> 
//         </Form>


//         <Table columns={columns} dataSource={dataSource}/>
        
//         <Button type="primary" loading>Loading</Button>
//         <br/>
//         <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}> 
//           Click me!
//         </Button>

        
//       </div>
//     );
//   }
// }

// export default App;

// 组件? 封装了或组合了一些html 完成一个特定的功能 并以一个自定义标签的形式向处提供 html css js
// antd UI风格 小蚂蚁大力量 配置优先

import React, { Component } from 'react';
import { 
  Form, Icon, Input, Button 
} from 'antd';
import './App.css';

const FormItem = Form.Item;

class HorizontalLoginForm extends React.Component {
  render () {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = this.props.form;

    const userNameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem validateStatus={userNameError?'error':''} help={userNameError || ''}>
          {
            getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],})(
            <Input 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
              placeholder="Username" 
            />
          )
          }
        </FormItem>

        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}>

          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        
        <FormItem>
          <Button type="primary" htmlType="submit">Log in</Button>
        </FormItem>
      </Form>
    )
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(
      (err, values) => {
        if(!err){
          console.log(values);
        }else{
          console.log(err);
        }
      }
    )
  }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);


class App extends Component {
  render () {
    return (
      <div >
        <WrappedHorizontalLoginForm /> 
      </div>
    );
  }
}

export default App;