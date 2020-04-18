import preStorageProcessing from './utils/preStorageProcessing'


export default (store) => {
  store.dispatch({
    type: 'setUserAction',
    payload: (localStorage.getItem('user') && preStorageProcessing.fromString(localStorage.getItem('user'))) || 
    null
  })
}