export const initState = {
  user: null,
  posts: [],
}

export const globalReducer = (state = initState, action) => {
  switch(action.type) {
    case 'setUserAction': 
      return {...state, user: action.payload};
    case 'unsetUserAction':
      return {...state, user: null};
      case 'writePosts': return {
        ...state, posts: [...state.posts, ...action.payload]
      }
    default: 
      return {...state};
  }
}