// 多(层次)组件共享状态
import { state } from './redux/state';
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/createStore';


const { store, dispatch } = createStore(state, storeChange)

function renderHead(state){
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
  //dispatch({type:'BODY_TEXT',text:'I am dispatched body.'})
}

function renderBody(state){
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp(store){
  renderHead(store.head);
  renderBody(store.body);
}

dispatch({type:'BODY_TEXT',text:'D.va 爱你哟 (๑′ᴗ‵๑)Ｉ Lᵒᵛᵉᵧₒᵤ❤ '})
dispatch({type:'HEAD_COLOR',color:'lightblue'})

console.log(store)
renderApp(store);







// // 组件只使用自己的状态 不需要redux
// // head 会用body 在body 会用head
// function renderHead(state){
//   const head = document.getElementById('head');
//   head.innerText = state.head.text;
//   head.style.color = state.head.color;
//   // 隐患 getState 读是无所谓 修改状态的值 只有 按规矩办 action 对状态写 所有组件都遵守的约定
//   // dispatch()
//   // state.body.text = 'I am changed body.';
//   dispatch(state,{type:'BODY_TEXT', text: 'I am changed body from dispatch'});
//   dispatch(state,{type:'HEAD_COLOR', color: 'orange'});
// }

// function renderBody(state){
//   const body = document.getElementById('body');
//   body.innerText = state.body.text;
//   body.style.color = state.body.color;  
// }

// function renderApp(state){
//   renderHead(state);
//   renderBody(state);
// }

// renderApp(appState);
