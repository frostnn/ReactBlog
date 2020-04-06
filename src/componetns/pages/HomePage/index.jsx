import React, {Component} from 'react';
import Page from '../../../componetns/common/Page/index'

import TopBar from './TopBar/TopBar'
import NavBar from './NavBar/NavBar';
//


export default class HomePage extends Component {
  render () {
    return (
        <Page>
        
          <TopBar name={this.props.user.name} unsetLoggedUser={this.props.unsetLoggedUser}/>
          <NavBar/>
        
        </Page>
        
           )
  }

}