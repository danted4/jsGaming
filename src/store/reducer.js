
const initialState = {
  gameStart : false,
  gameStartSnake : false,
  gameStartT90 : false
}


const rootReducer = (state = initialState, action) =>{
  console.log('action received',action);
  if(action.type==='STOP_BRICK_GAME'){
    return{...state, gameStart : false}
  }
  else if (action.type ==='START_BRICK_GAME') {
    return {...state, gameStart : true}
  }
  else if(action.type==='STOP_SNAKE_GAME'){
    return{...state, gameStartSnake : false}
  }
  else if (action.type ==='START_SNAKE_GAME') {
    return {...state, gameStartSnake : true}
  }
  else if(action.type==='STOP_TANK_GAME'){
    return{...state, gameStartT90 : false}
  }
  else if (action.type ==='START_TANK_GAME') {
    return {...state, gameStartT90 : true}
  }
  return state;
}

export default rootReducer;
