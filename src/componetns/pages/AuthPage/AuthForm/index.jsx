import React, {Component} from 'react';
import styles from './style.module.scss';
import TextInput from '../../../common/TextInput/';
import PasswordInput from '../../../common/PasswordInput/';
import AcceptButton from '../../../common/AcceptButton/';
import Server from '../../../../mocServer/';


export default class AuthForm extends Component {

  state = {
    login: '',
    password: ''
  };

  updateAuthData = (event, nameState) => {
    this.setState({
      [nameState]: event.target.value
  })
  };

  tryAuth = () => {
    try {
    const user =  Server.authorization({login: this.state.login, password: this.state.password})
      this.props.setLoggedUser(user);
      console.log('------>Logged!')
  } catch (error) {
      alert('Not login and password')
    }
  };

  render () {
    console.log(this.state)
    return (
          <div className={styles.wrapper}>
            <span className={styles.authTitle}>Авторизация</span>
              <TextInput updateAuthData={this.updateAuthData}/>
              <PasswordInput updateAuthData={this.updateAuthData}/>
              <AcceptButton text={'Вход'} submit={this.tryAuth}/>
          </div>
           )
  }

}