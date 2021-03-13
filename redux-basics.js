const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  name : 'Alex'
}
//Reducer
const rootReducer = (state = initialState, action) =>{
  if(action.type == 'CHANGE_NAME'){
    return {...state, ...action['payload'] };
  }
  return state;
}

//Store
//store needs to get initialized with reducer(which can update store)
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription

store.subscribe(()=>{
  console.log('[SUBSCRIPTION]',store.getState())
})



//Dispatching Action

store.dispatch({type:'CHANGE_NAME', payload : {name:'Kanav'}});
console.log(store.getState());
