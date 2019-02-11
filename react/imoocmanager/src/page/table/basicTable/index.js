import React from 'react';
import { Card, Table, message } from 'antd';
import axios from '../../../axios';
import './index.less';

export default class BasicTable extends React.Component {

  state = {}
  componentDidMount(){
    const dataSource = [
      {
        id:'1',
        userName:'Jackeylove',
        sex: 1,
        state:'5',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区',
        time: '07:00'
      },
      {
        id:'2',
        userName:'Baolan',
        sex:1,
        state:'5',
        interest: '3',
        birthday: '1999-01-01',
        address: '北京市海淀区',
        time: '07:20'
      },
      {
        id:'3',
        userName:'Ning',
        sex:1,
        state:'5',
        interest: '4',
        birthday: '1998-01-01',
        address: '北京市海淀区',
        time: '07:10'
      }   
    ]
    dataSource.map((item,index)=>{
      item.key = index
    })
    this.setState({
      dataSource
    })
    this.request()
  }

  request = ()=>{
    axios.ajax({
      url:'/table/list',
      data:{
        params:{
          page:1
        },
        isShowLoading: true
      }
    }).then(res=>{
      if(res.code === 0 ){
        res.data.map((item,index)=>{
          item.key = index
        })
        this.setState({
          dataSource2: res.data
        })
      }
    })
  }

  onRowClick = (record,index)=>{
    let selectKey = [index];
    message.info(`用户【${record.userName}】`);
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    })
  }

  render(){
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex){
          return sex === 1? '男':'女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            0:"暂无",
            1:"黄铜",
            2:"白银",
            3:"黄金",
            4:"钻石",
            5:"王者"
          }
          return config[state]
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(interest){
          let config = {
            0:"看书",
            1:"听音乐",
            2:"看电影",
            3:"游戏",
            4:"旅游",
            5:"篮球",
            6:"足球",
            7:"画画",
            8:"麦霸"
          }
          return config[interest]
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      },
    ]
    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    }
    return (
      <div>
        <Card title="基础表格">
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource} 
            pagination={false} 
            bordered/>
        </Card>
        <Card title="动态数据渲染表格" style={{marginTop: 16}}>
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource2} 
            pagination={false} 
            bordered/>
        </Card>
        <Card title="单选表格" style={{marginTop: 16}}>
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource2} 
            pagination={false} 
            bordered 
            rowSelection={rowSelection}
            onRow={(record,index)=>{
              return {
                onClick:()=>{
                  this.onRowClick(record,index);
                }
              }
            }}/>
        </Card>
      </div>
    )
  }
}