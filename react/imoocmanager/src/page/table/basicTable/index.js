import React from 'react';
import { Card, Table, message, Button, Modal } from 'antd';
import axios from '../../../axios';
import Util from './../../../util/utils';


export default class BasicTable extends React.Component {

  state = {}
  params = {
    page: 1
  }
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
      return item.key = index
    })
    this.setState({
      dataSource
    })
    this.request()
  }

  request = ()=>{
    axios.ajax({
      url:'/table/basic',
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
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows:[],
          pagination: Util.pagination(res,(current)=>{
            this.params.page = current;
            this.request()
          })
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

  handleDelete = ()=>{
    let rows = this.state.selectedRows || [];
    let ids = [];
    rows.map(item=>{
      return ids.push(item.id)
    })
    if(rows.length<=0){
      message.info('未选择数据')
      return 
    }

    Modal.confirm({
      title:'删除提示',
      content: `您确定要删除这些数据吗? ${ids}`,
      onOk:()=>{
        message.success('删除成功')
        this.request()
      }
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
    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys,selectedRows)=>{
        this.setState({
          selectedRowKeys,
          selectedRows
        })
      }
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
        <Card title="多选表格" style={{marginTop: 16}}>
          <div style={{marginBottom: 10}}>
            <Button onClick={this.handleDelete}>删除</Button>
          </div>
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource2} 
            pagination={false} 
            bordered 
            rowSelection={rowCheckSelection}
            />
        </Card>
        <Card title="分页表格" style={{marginTop: 16}}>
          <Table 
            columns={columns} 
            dataSource={this.state.dataSource2} 
            pagination={this.state.pagination} 
            bordered 
            />
        </Card>
      </div>
    )
  }
}