中间? UI <-> Redux 
中间件 middleware 生态npm

UI dispatch INCREMENT_ASYNC
何时? 订阅发布者模式
中间处理一下 发布者 redux-thunk redux-saga
  请求 setTimeout dispatch INCREMENT
redux

saga 是一个redux 状态异步处理的中间件
原生的react 通过生命周期或者业务逻辑 来异步请求数据, 耦合了redux 数据管理业务在UI之中是不可取的,
- 异步是绝对不可能改变的 (axios, 定时器)
  promise + generator* yield / async await
  放到saga文件中
  watch 每一个actionType take 给一个异步函数去执行
  位于中间件中 仍然属于redux
  createStore(reducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(rootSage);
  takeEvery(ActionType, gen);
- redux 状态最终仍然是同步处理的
  put 在saga内部dispatch同步action
- 异步流程很多 所以把它合为一处