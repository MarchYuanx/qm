import React from 'react';
import { Card, Form, Input, Button, Icon, message, Checkbox } from 'antd';

const Item = Form.Item;

class Login extends React.Component {
  handleSumbit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`用户名: ${userInfo.userName} ,密码:${userInfo.password}`)
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单" style={{marginBottom: 16}}>
          <Form layout="inline">
            <Item><Input placeholder="请输入用户名"/></Item>
            <Item><Input placeholder="请输入密码"/></Item>
            <Item><Button type="primary">登录</Button></Item>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form style={{width:300}}>
            <Item>
                {getFieldDecorator('userName', {
                //initialValue:'userName',
                rules: [{ required: true, message: 'Please input your username!' },{ min: 2,max:8, message: 'Invalid length ' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Item>
            <Item>
                {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Item>
            <Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a href="" style={{float:'right'}}>忘记密码</a>
            </Item>
            <Item><Button type="primary" onClick={this.handleSumbit} style={{width:300}}>登录</Button></Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Login);