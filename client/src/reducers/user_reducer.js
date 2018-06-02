export default function(state={},action){
  switch(action.type){
    case 'USER_LOGIN':
      return {...state, login:action.payload}
    case 'USER_AUTH':
    return {...state, login:action.payload}
    case 'GET_USER_POST':
    return {...state, userPosts:action.payload}
    case 'GET_USER':
    return {...state,users:action.payload}
    case 'USER_REGISTER':
    return {...state,register:action.payload.success,
    users:action.payload.users}
    case 'CLEAR_USER':
    return{...state,register:action.payload.register,
    user:action.payload.user}
    case 'CLEAR_NEWUSER':
    return{...state,newregister:action.payload.newregister,
    user:action.payload.user}
    default: 
    return state;
  }
}