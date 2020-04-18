import React, {Component} from 'react';
import Page from '../../../componetns/common/Page/index'
import TopBar from './TopBar/TopBar'
import NavBar from './NavBar/NavBar';
import PostSection from './sections/PostSection/PostSection'


export default class HomePage extends Component {
  render () {
    return (
        <Page>
        
          <TopBar/>
          <div style={{height: '100%', display: 'flex'}}>
            <NavBar/>
            <PostSection/>
          </div>
        </Page>
        
           )
  }

}