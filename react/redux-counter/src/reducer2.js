const defaultState = 0;
const reducer = (state = defaultState, action) => {
  console.log('state ',state)
  switch(action.type){
    case 'INCREMENT': 
      return state + action.payload;
    default:
      return state
  }
}

const actions = [
  { type: 'INCREMENT', payload: 0},
  { type: 'INCREMENT', payload: 1},
  { type: 'INCREMENT', payload: 2},
  { type: 'INCREMENT', payload: 3}
];

const total = actions.reduce(reducer, 0);
console.log(total)

