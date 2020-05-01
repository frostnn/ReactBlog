const initState = {
  activeButtonId: 1, 
}

export const navigateReducer = (state = initState, {type, payload}) => {
  switch(type) {
    case 'updateActiveButtonIdAction': 
      return {...state, activeButtonId: payload};
      default: return {...state}
  }
}