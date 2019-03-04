import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Home from './page/home';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loading from './page/ui/loading';
import Notice from './page/ui/notice';
import Message from './page/ui/message';
import Tabs from './page/ui/tabs';
import Gallery from './page/ui/gallery';
import Carousel from './page/ui/carousel';
import LoginForm from './page/form/login';
import RegisterForm from './page/form/register';
import BasicTable from  './page/table/basicTable';
import HighTable from  './page/table/highTable';
import Rich from  './page/rich';
import City from  './page/city';
import Order from  './page/order';
import Common from  './common';
import OrderDetail from  './page/order/detail.js';
import NotMatch from './page/notMatch';

export default class MyRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route exact path='/'  render={()=> (
            <Redirect to={"/admin"}/>
          )}/>
          <Route path="/admin" render={()=>
            <Admin>
              <Switch>
                <Route exact path="/admin" component={Home}/>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loading" component={Loading}/>
                <Route path="/admin/ui/notification" component={Notice}/>
                <Route path="/admin/ui/message" component={Message}/>
                <Route path="/admin/ui/tabs" component={Tabs}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousel}/>
                <Route path="/admin/form/login" component={LoginForm}/>
                <Route path="/admin/form/reg" component={RegisterForm}/>
                <Route path="/admin/table/basic" component={BasicTable}/>
                <Route path="/admin/table/high" component={HighTable}/>
                <Route path="/admin/rich" component={Rich}/>
                <Route path="/admin/city" component={City}/>
                <Route path="/admin/order" component={Order}/>
                <Route component={NotMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/login" component={Login}/>
          <Route path="/common" render={()=>
            <Common>
              <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
            </Common>
          }/>
        </App>
      </HashRouter>
    )
  }
}