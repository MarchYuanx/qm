import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
// 鉴权
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  } 
}
function AuthExample () {
  return (
    <Router>
      <div>
       <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path='/public' component={Public}/>
        <Route path='/login' component={Login}/>
        <PrivateRoute path='/protected' component={Protected}/>
      </div>
    </Router>
  )
}

const AuthButton = withRouter(({history}) => {
  return fakeAuth.isAuthenticated?(
    <p>
      Welcome!
      <button 
        onClick={() => {
          fakeAuth.signout(() => {
            // Redirect? 
            // js  并非 jsx 输出
            history.push('/') 
          });
        }}>Sign out</button>
    </p>
  ): (
    <p>You are not logged in.</p>
  );
})

function Public () {
  return <div>Public</div>;
}
function PrivateRoute ({component: Component, ...rest}) {
  return (
    <Route 
      {...rest}
      render={ props=>
        fakeAuth.isAuthenticated ? (
          <Component />
        ) : (
          <Redirect 
            to={{
              pathname: "/login",
              state: { from: props.location}
            }}
            />
        )
      }
    />
  )
}

function Protected() {
  return <div>Protected</div>;
}
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login =  () => {
    fakeAuth.authenticate(() => {
      this.setState({
        redirectToReferrer: true
      })
    })
    // fakeAuth.isAuthenticated = true
  }
  render() {
    let { from } = this.props.location.state || {from:{
      pathname: '/'
    }};
    let redirectToReferrer = this.state.redirectToReferrer;
    if ( redirectToReferrer ) return <Redirect to={from}/>

    return (
      <div>

        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

ReactDOM.render(<AuthExample/>, document.getElementById('root'))
