// src/pages/echarts/bar/index.js
import React from 'react';
import {Card} from 'antd';
import ReactEcharts from 'echarts-for-react';
//按需加载
import echarts from 'echarts/lib/echarts';
//导入矩形图
import 'echarts/lib/chart/line';
//必需基础组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';


import defaultTheme from '../defaultTheme';
import shine from '../shine';

export default class Pie extends React.Component {
  componentWillMount(){
    echarts.registerTheme('default', defaultTheme);
    echarts.registerTheme('shine', shine);
  }


  getOption = () => {
    let option = {
      title : {
        text: '用户骑行订单',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series : [
        {
          name: '订单量',
          type: 'pie',
          radius : '60%',
          data: [
            { value:1000, name:"周一" },
            { value:400, name:"周二" },
            { value:1500, name:"周三" },
            { value:1880, name:"周四" },
            { value:2470,name:"周五" },
            { value:1200, name:"周六" },
            { value:1500, name:"周日"},
          ],      
        }
      ]
    };
    return option
  }

  getOption2 = () => {
    let option = {
      title : {
        text: '用户骑行订单',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series : [
        {
          name: '订单量',
          type: 'pie',
          radius : ['40%','55%'],
          data: [
            { value:1000, name:"周一" },
            { value:400, name:"周二" },
            { value:1500, name:"周三" },
            { value:1880, name:"周四" },
            { value:2470,name:"周五" },
            { value:1200, name:"周六" },
            { value:1500, name:"周日"},
          ],          
        }
      ]
    };
    return option
  }

  getOption3 = () => {
    let option = {
      title : {
        text: '用户骑行订单',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      series : [
        {
          name: '订单量',
          type: 'pie',
          radius : '65%',
          data: [
            { value:1000, name:"周一" },
            { value:800, name:"周二" },
            { value:1500, name:"周三" },
            { value:1880, name:"周四" },
            { value:2270,name:"周五" },
            { value:1200, name:"周六" },
            { value:1500, name:"周日"},
          ].sort((a,b)=>{
            return a.value - b.value
          }),
          roseType: 'area'
            
        }
      ]
    };
    return option
  }

  render(){
    return(
      <div>
          <Card title="折线图一">
            <ReactEcharts option={this.getOption()} theme="default" style={{height: 400}}/>
          </Card>
          <Card title="折线图二" style={{marginTop:16}}>
            <ReactEcharts option={this.getOption2()} theme="default" style={{height: 400}}/>
          </Card>
          <Card title="折线图三" style={{marginTop:16}}>
            <ReactEcharts option={this.getOption3()} theme="default" style={{height: 400}}/>
          </Card>
      </div>
    )
  }
}