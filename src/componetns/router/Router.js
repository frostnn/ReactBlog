import React from 'react'
import AuthPage from '../../componetns/pages/AuthPage/index';
import HomePage from '../../componetns/pages/HomePage/index';
import { store } from '../../App'
import { connect } from 'react-redux';
import mapStateToProps from '../../reducers/mapStateToProps';
import mapActionToProps from '../../reducers/mapActionToProps';

class Router extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        {(this.props.user && <HomePage />) || (<AuthPage/>)}
      </div>
    )
  }
}

export default connect(mapStateToProps.global, mapActionToProps)(Router)