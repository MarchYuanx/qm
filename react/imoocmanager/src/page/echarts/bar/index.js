// src/pages/echarts/bar/index.js
import React from 'react';
import {Card} from 'antd';
import ReactEcharts from 'echarts-for-react';
//按需加载
import echarts from 'echarts/lib/echarts';
//导入矩形图
import 'echarts/lib/chart/bar';
//必需基础组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';


import defaultTheme from '../defaultTheme';
import shine from '../shine';

export default class Bar extends React.Component {
  componentWillMount(){
    echarts.registerTheme('default', defaultTheme);
    echarts.registerTheme('shine', shine);
  }

  getOption = () => {
    let option = {
      title : {
        text: "用户骑行订单"
      },
      xAxis:{
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type: 'value'
      },
      tooltip: { // 提示条
        trigger: 'axis',
      },
      series: [
        {
          name: '订单量',
          type: 'bar',
          data: [2500,2000,2200,2340,5540,4230,3230]
        }
      ]
    }
    return option
  }

  getOption2 = () => {
    let option = {
      title : {
        text: "用户骑行订单"
      },
      legend:{
        data:['ofo','mobike','hellobike']
      },
      xAxis:{
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type: 'value'
      },
      tooltip: { // 提示条
        trigger: 'axis',
      },
      series: [
        {
          name: 'ofo',
          type: 'bar',
          data: [2500,2000,2200,2340,5840,4230,3230]
        },
        {
          name: 'mobike',
          type: 'bar',
          data: [2100,1600,2250,3340,4540,3430,2230]
        },
        {
          name: 'hellobike',
          type: 'bar',
          data: [2500,2000,1200,2540,4140,2230,1230]
        }
      ]
    }
    return option
  }

  render(){
    return(
      <div>
          <Card title="柱形图一">
            <ReactEcharts option={this.getOption()} theme="shine" style={{height: 400}}/>
          </Card>
          <Card title="柱形图二" style={{marginTop:16}}>
            <ReactEcharts option={this.getOption2()} theme="shine" style={{height: 400}}/>
          </Card>
      </div>
    )
  }
}