import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from './../../util/utils';
import axios from './../../axios';
import './index.less';
export default class Header extends Component {
  
  componentWillMount(){
    this.setState({
      userName: 'March',
      sysTime: Util.formateTime(new Date().getTime()),
      weather: '晴转多云'
      // api要钱 默认晴天
    })
    setInterval(()=>{
      let sysTime = Util.formateTime(new Date().getTime());
      this.setState({
        sysTime
      })
    },1000);
    // this.getWeatherAPIData();
    // 使用获取天气api 
  }
  
  getWeatherAPIData(){
    let city = "南昌";
    let key = "1d057a0b0cdc36d060ff0536af0491e5"
    axios.Jsonp({
      url:"http://v.juhe.cn/weather/index?format=2&cityname="+encodeURIComponent(city)+"&key="+key
    }).then((res)=>{
      if(res.resultcode === "200"){
        //console.log('res',res);
        let weather = res.result.today.weather;
        this.setState({
          weather
        })
      }
      
    })
  }

  render() {
    return (
      <div className="header">
        <Row>
          <Col span={24} className="header-top">
            <span>欢迎 {this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}
