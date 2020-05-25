import preStorageProcessing from './utils/preStorageProcessing'
import pushLocation from './utils/pushLocation'

export default (store) => {
  const user =  (localStorage.getItem('user') && preStorageProcessing.fromString(localStorage.getItem('user'))) || 
  null;
  store.dispatch({
    type: 'setUserAction',
    payload: user,
  })
  if(!user) pushLocation('/');
}