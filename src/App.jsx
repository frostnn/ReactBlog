import React from 'react';
import './styles/global.scss';
import AuthPage from './componetns/pages/AuthPage/index';
import HomePage from './componetns/pages/HomePage/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {globalReducer, initState} from './reducers/globalReducer'
import initApp from './initApp';


export const store = createStore(globalReducer, initState);

class App extends React.Component {
  constructor(props){
    super(props);
    initApp(store);
  }

  render() { 
    return (
      <Provider store={store}>
        <div className="App">
        {
          (store.getState().user && <HomePage />) || (  
          <AuthPage/>)
        }
        </div>
      </Provider>
    );
  }
}

export default App;
