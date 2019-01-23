import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import SubMenu from 'antd/lib/menu/SubMenu';
import MenuConfig from './../../config/menuConfig';
import './index.less'

export default class NavLeft extends Component {
  componentWillMount(){
    const MenuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      MenuTreeNode
    })
  }
  //菜单渲染
  renderMenu = (data) => {
    return data.map((item)=>{
      if(item.children){
        return <SubMenu title={item.title} key={item.key}>
          { this.renderMenu(item.children) }
        </SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </Menu.Item>
    })
  }
  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="logo-ant"/>
          <h1>March MS</h1>
        </div>
        
        <Menu theme="dark">
          { this.state.MenuTreeNode }
        </Menu>
          

      </div>
    );
  }
}
