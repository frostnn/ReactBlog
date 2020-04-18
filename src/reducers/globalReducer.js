export const initState = {
  activeButtonId: 1,
  user: null,
}

export const globalReducer = (state = initState, action) => {
  switch(action.type) {
    case 'updateActiveButtonIdAction': 
      return {...state, activeButtonId: action.payload};
    case 'setUserAction': 
      return {...state, user: action.payload};
    case 'unsetUserAction':
      return {...state, user: null};
    default: 
      return {...state};
  }
}