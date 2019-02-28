import React from 'react';
import { Card, Table, Button, Form, Modal, Select, message } from 'antd';
import axios from '../../axios';
import '../../style/common.less'
import Util from './../../util/utils';

const FormItem= Form.Item; 
const Option = Select.Option;


export default class City extends React.Component {

  state = {}
  params = {
    page: 1
  }
  componentDidMount(){
    this.request()
  }
  request = ()=>{
    axios.ajax({
      url:'/open_city',
      data:{
        params:{
          page:this.params.page
        },
        isShowLoading: true
      }
    }).then(res=>{
      if(res.code === 0 ){
        res.result.item_list.map((item,index)=>{
          item.key = index;
          return item;
        })
        this.setState({
          dataSource: res.result.item_list,
          pagination: Util.pagination(res,(current)=>{
            this.params.page = current;
          })
        })
      }
    })
  }

  //开通城市
  handleOpenCity = ()=> {
    this.setState({
      isShowOpenCity: true
    })
  }
  //提交开通信息
  handleSubmit = ()=>{
    let cityInfo = this.cityForm.props.form.getFieldsValue();
    //console.log(cityInfo);
    axios.ajax({
      url: '/city/open',
      data:{
        params:cityInfo
      }
    }).then(res=>{
      if(res.code === 0){
        message.success(res.result);
        this.setState({
          isShowOpenCity:false
        })
        this.request();
      }
    })
  }

  render(){
    const columns = [
      {
        title: '城市ID',
        dataIndex: 'id'
      },
      {
        title: '城市名称',
        dataIndex: 'name'
      },
      {
        title: '用车模式',
        dataIndex: 'mode',
        render(mode){
          return mode === 1? '停车点':'禁停区'
        }
      },
      {
        title: '营运模式',
        dataIndex: 'op_mode',
        render(op_mode){
          return op_mode === 1? '自营':'加盟'
        }
      },
      {
        title: '授权加盟商',
        dataIndex: 'franchise_name'
      },
      {
        title: '城市管理员',
        dataIndex: 'city_admins',
        render(arr){
          return arr.map((item)=>{
            return item.user_name
          }).join(',')
        }
      },
      {
        title: '城市开通时间',
        dataIndex: 'open_time'
      },
      {
        title: '操作时间',
        dataIndex: 'update_time',
        render:Util.formateTime
      },
      {
        title: '操作人',
        dataIndex: 'sys_user_name'
      }
    ]

    return (
      <div>
        <Card>
          <FilterForm/>
        </Card>
        <Card style={{marginTop:16}}>
          <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns = {columns}
            dataSource = {this.state.dataSource}
          />
        </div>
        <Modal
          title="开通城市"
          visible={this.state.isShowOpenCity}
          onCancel={()=>{
            this.setState({
              isShowOpenCity:false
            })
          }}
          onOk={this.handleSubmit}>
          <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst;}}/>
        </Modal>
      </div>
    )
  }
}

class FilterForm extends React.Component{
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline">
        <FormItem label="选择城市">
        {
          getFieldDecorator('city_id',{
            initialValue: ""
          })(
            <Select style={{width:120}}>
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">上海市</Option>
            </Select>
          )
        }   
        </FormItem>
        <FormItem label="用车模式">
        {
          getFieldDecorator('use_mode',{
            initialValue: ""
          })(
            <Select style={{width:120}}>
              <Option value="">全部</Option>
              <Option value="1">停车点</Option>
              <Option value="2">禁停区</Option>
            </Select>
          )
        }   
        </FormItem>
        <FormItem label="营运模式">
        {
          getFieldDecorator('op_mode',{
            initialValue: ""
          })(
            <Select style={{width:120}}>
              <Option value="">全部</Option>
              <Option value="1">自营</Option>
              <Option value="2">加盟</Option>
            </Select>
          )
        }   
        </FormItem>
        <FormItem label="加盟商授权状态">
        {
          getFieldDecorator('state',{
            initialValue: ""
          })(
            <Select style={{width:120}}>
              <Option value="">全部</Option>
              <Option value="1">已授权</Option>
              <Option value="2">未授权</Option>
            </Select>
          )
        }   
        </FormItem>
        <FormItem>
          <Button type="primary" style={{marginRight:10}}>查询</Button>
          <Button>重置</Button>
        </FormItem>
        
      </Form>
      
    )
  }
}

FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends React.Component{
  render(){
    const formItemLayout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 8
      }
    }
    const { getFieldDecorator } = this.props.form; 
    return(
      <Form layout="horizontal">
        <FormItem label="选择城市" {...formItemLayout}>
        {
          getFieldDecorator('city_id',{
            initialValue: "1"
          })(
            <Select>
              <Option value="">全部</Option>
              <Option value="1">北京市</Option>
              <Option value="2">天津市</Option>
              <Option value="3">上海市</Option>
            </Select>
          )
        }   
        </FormItem>
        <FormItem label="营运模式" {...formItemLayout}>
        {
          getFieldDecorator('op_mode',{
            initialValue: '1'
          })(
            <Select>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
          )
        }  
        </FormItem>
        <FormItem label="用车模式" {...formItemLayout}>
        {
          getFieldDecorator('use_mode',{
            initialValue: '1'
          })(
            <Select>
            <Option value="1">停车点</Option>
            <Option value="2">禁停区</Option>
          </Select>
          )
        }     
        </FormItem>
      </Form>
    )
  }
}
OpenCityForm = Form.create({})(OpenCityForm);