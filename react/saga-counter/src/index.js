import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import Counter from './Counter';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(reduxLogger,sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});


// var async = ()=>{
//   setTimeout(()=>{
//     // 因为在UI业务中的异步超出了redux 的范围
//     console.log('async');
//     action('INCREMENT_ASYNC');
//   },1000)
// }

//  onIncrementAsync={async}


function render () {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={()=>action('INCREMENT_ASYNC')}
      onIncrementIfOdd={()=>action('INCREMENT_IF_ODD')} 
      onIncrement={()=>action('INCREMENT')}
      onDecrement={()=>action('DECREMENT')}
    />,
    document.getElementById('root')
  )
}

render();
store.subscribe(render);