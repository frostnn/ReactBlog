import React, {Component} from 'react';
import AuthForm from './AuthForm';
import Page from '../../common/Page'
import styles from './style.module.scss';


export default class AuthPage extends Component {
  render () {
    return (
        <Page addStyle={styles.wrapper}>
          <AuthForm setLoggedUser={this.props.setLoggedUser}/>
        </Page>
        
           )
  }

}