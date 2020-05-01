import actions from '../actions/actions'

export default (dispatch) => ({
  setUserAction: (user)=>{
    dispatch(actions.setUserAction(user))
    },

  unsetUserAction: ()=>{
    dispatch(actions.unsetUserAction())
    },

    updateActiveButtonIdAction: (id)=>{
    dispatch(actions.updateActiveButtonIdAction(id))
    },   
    writePosts: posts => {
      dispatch(actions.writePosts(posts));
    }
  })