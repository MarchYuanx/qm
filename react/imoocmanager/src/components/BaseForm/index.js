import React from 'react';
import { Input, Select, Form, Button, Checkbox, DatePicker } from 'antd';
import Util from '../../util/utils';

const FormItem = Form.Item;

class FilterForm extends React.Component{

  handleFilterSubmit = ()=>{
    let fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }

  reset = ()=>{
    this.props.form.resetFields();
  }

  initFormList = ()=>{
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList; // 从父组件Order.js 中获取该对象进行使用
    const formItemList = [];

    if(formList && formList.length>0){
      formList.forEach((item,i) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue;
        let placeholder = item.placeholder;
        let width = item.width;
        if(item.type === 'SELECT'){
          const SELECT = <FormItem label={label} key={field}>
            {
              getFieldDecorator(field,{
                initialValue: initialValue
              })(
                <Select style={{width:width}} placeholder={placeholder}>
                  {Util.getOptionList(item.list)}
                </Select>
              )
            } 
          </FormItem>
          formItemList.push(SELECT)
        }else if(item.type === 'INPUT'){
          const INPUT = <FormItem label={label} key={field}>
            {
              getFieldDecorator(field,{
                initialValue: initialValue
              })(
                <Input type="text" placeholder={placeholder}/>
              )
            } 
          </FormItem>
          formItemList.push(INPUT)
        }else if (item.type === 'CHECKBOX') {
          const CHECKBOX = <FormItem label={label} key={field}>
            {
              getFieldDecorator(field, {
                valuePropName: 'checked', // 设置checkbox的属性
                initialValue: initialValue // true | false
              })(
                <Checkbox>
                  {label}
                </Checkbox>
              )
            }
          </FormItem>;
          formItemList.push(CHECKBOX);
        }else if (item.type === 'TIME') {
          const begin_time = <FormItem label="订单时间" key="begin_time">
            {
              getFieldDecorator('begin_time')(
                <DatePicker showTime={true} placeholder="Select Date" format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>;
          formItemList.push(begin_time);

          const end_time = <FormItem label="~" colon={false} key="end_time">
            {
              getFieldDecorator('end_time')(
                <DatePicker showTime={true} placeholder="Select Date" format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>;
          formItemList.push(end_time);
        }  
      });
    }
    return formItemList;
  }

  render(){
    return (
      <Form layout = "inline">
        { this.initFormList() }
        <FormItem>
          <Button type="primary" style={{marginRight:10}} onClick={this.handleFilterSubmit}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create({})(FilterForm)