import React from 'react'
import AuthPage from '../../componetns/pages/AuthPage/index';
import HomePage from '../../componetns/pages/HomePage/index';
import { connect } from 'react-redux';
import mapStateToProps from '../../reducers/mapStateToProps';
import mapActionToProps from '../../reducers/mapActionToProps';
import { BrowserRouter, Route } from 'react-router-dom';

class Router extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
       
          <Route exact path='/' component={AuthPage}/>
          <Route path='/home' component={HomePage}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps.global, mapActionToProps)(Router)