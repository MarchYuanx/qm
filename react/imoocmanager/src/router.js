import React from 'react';
import { HashRouter , Route , Link, Switch } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Home from './page/home';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loading from './page/ui/loading';
import NotMatch from './page/notMatch';

export default class MyRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/admin" render={()=>
            <Admin>
              <Switch>
                <Route exact path="/admin" component={Home}/>
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loading" component={Loading}/>
                <Route component={NotMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/login" component={Login}/>
        </App>
      </HashRouter>
    )
  }
}