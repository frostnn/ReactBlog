import preStorageProcessing from '../utils/preStorageProcessing'
export default {
  updateActiveButtonIdAction(activeButtonId) {
    return {
      type: 'updateActiveButtonIdAction',
      payload: activeButtonId,
    };
  },
  setUserAction(user){
    localStorage.setItem('user', preStorageProcessing.toString(user));
    return {type: 'setUserAction', payload: user}
  },

  unsetUserAction(){
    localStorage.removeItem('user');
    return {type: 'unsetUserAction'}
  }
};

