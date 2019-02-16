import React from 'react';
import { Card, Table, message, Button, Modal, Badge } from 'antd';
import axios from '../../../axios';
import Util from './../../../util/utils';

export default class HighTable extends React.Component {

  state = {}
  params = {
    page: 1
  }

  componentDidMount(){
    this.request()
  }
  request = ()=>{
    axios.ajax({
      url:'/table/high',
      data:{
        params:{
          page:this.params.page
        },
        isShowLoading: true
      }
    }).then(res=>{
      if(res.code === 0 ){
        res.result.list.map((item,index)=>{
          return item.key = index
        })
        this.setState({
          dataSource: res.result.list
        })
      }
    })
  }
  
  handleDelete = (item)=>{
    let id = item.id;
    Modal.confirm({
      title:'确认',
      content:'您确定要删除本条数据吗？',
      onOk:()=>{
        message.success('删除成功');
        this.request()
      }
    })
  }

  render(){
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 100
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 100
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 100,
        render(sex){
          return sex === 1? '男':'女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 100,
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
        width: 100,
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
        width: 150,
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 150,
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        width: 100
      },
    ]
    const columns2 = [
      {
        title: 'id',
        dataIndex: 'id',
        width: 100,
        fixed:'left'
      },
      {
        title: '用户名',
        dataIndex: 'userName',
        width: 100,
        fixed:'left'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        width: 100,
        render(sex){
          return sex === 1? '男':'女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        width: 100,
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
        width: 100,
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
        width: 150,
        key:'birthday1',
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        width: 150,
        key:'birthday2',
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        width: 150,
        key:'birthday3',
        dataIndex: 'birthday'
      },
      {
        title: '生日',
        width: 150,
        key:'birthday4',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        width: 150,
        key:'address1',
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 150,
        key:'address2',
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 150,
        key:'address3',
        dataIndex: 'address'
      },
      {
        title: '地址',
        width: 150,
        key:'address4',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time',
        width: 100
      },
    ]
    const columns3 = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex){
          return sex === 1? '男':'女'
        }
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter:(a,b)=>{
          return a.age - b.age
        },
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
        dataIndex: 'time',
      },
    ]
    const columns4 = [
      {
        title: 'id',
        dataIndex: 'id',
      },
      {
        title: '用户名',
        dataIndex: 'userName',
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
            1:<Badge status="success" text="成功"/>,
            2:<Badge status="error" text="报错"/>,
            3:<Badge status="default" text="正常"/>,
            4:<Badge status="warning" text="警告"/>,
            5:<Badge status="processing" text="进行中"/>
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
        title: '操作',
        render:(text,item)=>{
          return <Button size="small" onClick={(item)=>{this.handleDelete(item)}}>删除</Button>
        }
      },
    ]
    return (
      <div>
        <Card title="头部固定">
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource} 
            pagination={false} 
            scroll={{y:270}}
            bordered/>
        </Card>
        <Card title="左侧固定" style={{marginTop: 16}}>
          <Table 
            columns={columns2} 
            dataSource={this.state.dataSource} 
            pagination={false} 
            scroll={{x:1816}}
            bordered/>
        </Card>
        <Card title="表格排序" style={{marginTop: 16}}>
          <Table 
            columns={columns3} 
            dataSource={this.state.dataSource} 
            pagination={false} 
            bordered/>
        </Card>
        <Card title="操作按钮" style={{marginTop: 16}}>
          <Table 
            columns={columns4} 
            dataSource={this.state.dataSource} 
            pagination={false} 
            bordered/>
        </Card>
      </div>
    )
  }
}