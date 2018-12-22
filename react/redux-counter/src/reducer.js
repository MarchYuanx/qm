const defaultState = 0;
const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD':
      return state + action.payload;
    default:
      return state
  }
}

const stated = reducer(9,{
  type: 'ADD',
  payload: 2
})

console.log(stated)

