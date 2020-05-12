import React from 'react';
import './styles/global.scss';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import initApp from './initApp';
import Router from './componetns/router/Router';
import rootREducers from './reducers/rootREducer';

const customMiddleware = store => next => action => {
  return next(action)
};

export const store = createStore(
  rootREducers, 
  undefined,
  applyMiddleware(customMiddleware)
  );

class App extends React.Component { 
  constructor(props){
    super(props);
    initApp(store);
  }

  render() { 
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
