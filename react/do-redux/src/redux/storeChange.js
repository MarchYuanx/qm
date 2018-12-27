// 写 规则 何时写 如何写 dispatch 只是一个代号
// 只负责state计算
export const storeChange = (state, action) => {
  switch(action.type){
    case 'HEAD_COLOR':
      state.head.color = action.color;
    break;
    case 'BODY_TEXT':
      state.body.text = action.text;
    break;
  
    default:
    break;
  }
}