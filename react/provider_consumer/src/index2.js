import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from 'redux';

// provider store => Component => dispatch => store



const reducers = combineReducers({
  films: (state = [], action) => {
    let { type, payload } = action;

    switch(type){
      case 'GET_FILM_DATA':
        var newS = [...state];
        newS = payload;
        console.log('[reducers]',newS)
        return newS;
      default:
        return state;
    }

    
  }
})

const store = createStore(reducers);

function renderPage () {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

renderPage();
console.log('first mount');
store.subscribe(renderPage);





// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));



