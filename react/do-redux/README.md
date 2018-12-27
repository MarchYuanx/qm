- redux 让所有的状态共享 可读 写要遵守规则
这样是redux的基本规则 只有action 可以修改state
执行相应reducer 组件只能dispatch一个action

- reducer 不可以直接调用 action 才可以
要保护好数据 设置了reducer 提供并且精确计算状态的函数
组件只有dispatch一个action才能执行reducer