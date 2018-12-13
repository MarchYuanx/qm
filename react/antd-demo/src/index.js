import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route }from 'react-router-dom'
import Beer from './Beer';
import Single from './Single';

import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Beer}></Route>
      <Route path='/search/:searchTerm' component={Beer}></Route>
      <Route path='/beer/:beerId/:beerSlug' component={Single}></Route>
    </div>
  </Router>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

