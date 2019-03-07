import React from 'react';
import '../../style/common.less';
import Util from './../../util/utils';
import BaseForm from '../../components/BaseForm';
import axios from '../../axios'
import { Card, Button, Table, Modal } from 'antd';

export default class Order extends React.Component{
  state = {}
  params = {
    page: 1
  }

  formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      placeholder: '全部',
      initialValue: 0,
      width: 100,
      list: [{ id:0, name: '全部'},{ id:1, name: '北京'},{ id:2, name: '天津'},{ id:3, name: '上海'}]
    },
    {
      type: 'TIME'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field: 'order_status',
      placeholder: '全部',
      initialValue: 0,
      width: 100,
      list: [{ id:0, name: '全部'},{ id:1, name: '进行中'},{ id:2, name: '结束行程'}]
    }
  ]

  componentDidMount(){
    this.requestList()
  }

  handleFilter = (params)=>{
    this.params = params;
    this.requestList()
  }

  requestList = ()=> {
    axios.ajax({
      url: '/order/list',
      data:{
        params: this.params
      }
    }).then((res)=>{
      if(res.code === 0 ){
        res.result.item_list.map((item,index)=>{
          item.key = index;
          return item;
        })
        this.setState({
          dataSource: res.result.item_list,
          pagination: Util.pagination(res,(current)=>{
            this.params.page = current;
            this.requestList()
          })
        })
      }
    })
  }
  onRowClick = (record,index)=>{
    let selectKey = [index];
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }
  openOrderDetail = () => {
    let item = this.state.selectedItem;
    if (!item) {
      Modal.info({
        title: '信息',
        content: '请先选择一条订单'
      });
      return;
    }
    // 通过window.open 进行路由的跳转
    window.open('/#/common/order/detail/' + item.id, '_blank');
  };
  render(){
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    const columns = [
      {
        title: '订单编号',
        dataIndex: 'order_sn'
      },
      {
        title: '车辆编号',
        dataIndex: 'bike_sn'
      },
      {
        title: '用户名',
        dataIndex: 'user_name'
      },
      {
        title: '手机号',
        dataIndex: 'mobile'
      },
      {
        title: '里程',
        dataIndex: 'distance',
        render(distance){
            return distance/1000 + 'Km';
        }
      },
      {
        title: '行驶时长',
        dataIndex: 'total_time',     
      },
      {
        title: '状态',
        dataIndex: 'status'
      },
      {
        title: '开始时间',
        dataIndex: 'start_time',
      },
      {
        title: '结束时间',
        dataIndex: 'end_time'
      },
      {
        title: '订单金额',
        dataIndex: 'total_fee'
      },
      {
        title: '实付金额',
        dataIndex: 'user_pay'
      }
    ]
    return (
      <div>
        <Card>
          <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
        </Card>
        {/* <Card>
          <FilterForm/>
        </Card> */}
        <Card style={{marginTop: 16}}>
          <Button type="primary" onClick={this.openOrderDetail}>订单详情</Button>
          <Button type="primary" style={{marginLeft:16}}>结束订单</Button>
        </Card>
        <div className="content-wrap">
          <Table
            bordered
            columns = {columns}
            rowSelection={rowSelection}
            selectedRowKeys={this.state.selectedRowKeys}
            selectedItem={this.state.selectedItem}
            dataSource = {this.state.dataSource}
            pagination={this.state.pagination}
            onRow={(record,index)=>{
              return {
                onClick:()=>{
                  this.onRowClick(record,index);
                }
              }
            }}
          />
        </div>
      </div>
    )
  }
}

// class FilterForm extends React.Component{
//   render(){
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Form layout="inline">
//         <FormItem label="城市">
//         {
//           getFieldDecorator('city_id',{
//             initialValue: ""
//           })(
//             <Select style={{width:120}}>
//               <Option value="">全部</Option>
//               <Option value="1">北京市</Option>
//               <Option value="2">天津市</Option>
//               <Option value="3">上海市</Option>
//             </Select>
//           )
//         }   
//         </FormItem>
//         <FormItem label="订单时间">
//         {
//           getFieldDecorator('start_time')(
//             <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
//           )
//         }

//         </FormItem>
//         <FormItem >
//         {
//           getFieldDecorator('end_time')(
//             <DatePicker style={{marginLeft: 16}} showTime format="YYYY-MM-DD HH:mm:ss" />
//           )
//         }   
//         </FormItem>
//         <FormItem label="订单状态">
//         {
//           getFieldDecorator('order_status',{
//             initialValue: ""
//           })(
//             <Select style={{width:120}}>
//               <Option value="">全部</Option>
//               <Option value="1">进行中</Option>
//               <Option value="2">结束行程</Option>
//             </Select>
//           )
//         }   
//         </FormItem>
        
//         <FormItem>
//           <Button type="primary" style={{marginRight:10}}>查询</Button>
//           <Button>重置</Button>
//         </FormItem>
        
//       </Form>
      
//     )
//   }
// }

// FilterForm = Form.create({})(FilterForm);