import React from 'react';
import { Card, Form, Input, Button, Icon, message, Checkbox, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload } from 'antd';
import moment from 'moment';
import './index.less';

const Item = Form.Item;
const Group = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class Register extends React.Component {

  state = {
    loading: false,
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  handleSubmit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo)
    message.success(`${userInfo.userName} 注册成功！`)
  }
  render(){
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12,
      }
    }
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <Item label="用户名" {...formItemLayout}>
              {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' },{ min: 2,max:8, message: 'Invalid length ' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </Item>
            <Item label="密码" {...formItemLayout}>
              {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}          
            </Item>
            <Item label="性别" {...formItemLayout}>
              {getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <Group>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </Group>
                )}          
            </Item>
            <Item label="年龄" {...formItemLayout}>
              {getFieldDecorator('age', {
                  initialValue: 18
                })(
                  <InputNumber/>
                )}          
            </Item>
            <Item label="当前状态" {...formItemLayout}>
              {getFieldDecorator('state', {
                  initialValue: '0'
                })(
                  <Select>
                    <Option value="0">暂无</Option>
                    <Option value="1">黄铜</Option>
                    <Option value="2">白银</Option>
                    <Option value="3">黄金</Option>
                    <Option value="4">钻石</Option>
                    <Option value="5">王者</Option>
                  </Select>
                )}          
            </Item>
            <Item label="爱好" {...formItemLayout}>
              {getFieldDecorator('interest', {
                  initialValue: ['0','1']
                })(
                  <Select mode="multiple">
                    <Option value="0">看书</Option>
                    <Option value="1">听音乐</Option>
                    <Option value="2">看电影</Option>
                    <Option value="3">游戏</Option>
                    <Option value="4">旅游</Option>
                    <Option value="5">篮球</Option>
                  </Select>
                )}          
            </Item>
            <Item label="是否已婚" {...formItemLayout}>
              {getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: false
                })(
                  <Switch/>
                )}          
            </Item>
            <Item label="生日" {...formItemLayout}>
              {getFieldDecorator('birthday', {
                  initialValue: moment('2000-01-01')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD"
                  />
                )}          
            </Item>
            <Item label="联系地址" {...formItemLayout}>
              {getFieldDecorator('address',{
                initialValue: '北京市海淀区'
              })(
                  <TextArea
                    autosize = {{
                      minRows: 2,
                      maxRows: 6
                    }}
                  />
                )}          
            </Item>
            <Item label="早期时间" {...formItemLayout}>
              {getFieldDecorator('time')(
                  <TimePicker/>
                )}          
            </Item>
            <Item label="头像" {...formItemLayout}>
              {getFieldDecorator('imageUrl')(
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}
                >
                  {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" style={{width:'100%'}}/> : uploadButton}
                </Upload>
                )}          
            </Item>
            <Item {...offsetLayout}>
              {getFieldDecorator('read',{
                valuePropName: 'checked',
                initialValue: false
              })(
                  <Checkbox>我已经阅读过<a href="http://www.w3school.com.cn/">W3C协议</a></Checkbox>
                )}          
            </Item>
            <Item {...offsetLayout}>
              {getFieldDecorator('reg')(
                  <Button type="primary" onClick={this.handleSubmit} disabled={!this.props.form.getFieldsValue().read}>注册</Button>
                )}          
            </Item>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Form.create()(Register);