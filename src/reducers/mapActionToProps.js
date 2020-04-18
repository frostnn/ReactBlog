import globalAction from '../actions/globalAction'

export default (dispatch) => ({
  setUserAction: (user)=>{
    dispatch(globalAction.setUserAction(user))
    },

  unsetUserAction: (user)=>{
    dispatch(globalAction.unsetUserAction(user))
    },

    updateActiveButtonIdAction: (id)=>{
    dispatch(globalAction.updateActiveButtonIdAction(id))
    },   
  })