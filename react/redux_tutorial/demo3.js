import { createStore, combineReducers } from 'redux'

var reducer_0 = function(state = {}, action){
  switch(action.type){
    case 'SAY_SOMETHING':
      return {
        ...state,
        message: action.value
      }
    default: 
      return state
    
  }
}

var userReducer = (state={},action)=>{
  switch(action.type){
    default: 
      state
  }
}

var reducer = combineReducers({
  user: userReducer,
  reducer_0: reducer_0
})

var store = createStore(reducer);