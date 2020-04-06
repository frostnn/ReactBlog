import React, {Component} from 'react';
import styles from './style.module.scss';

export default class PasswordInput extends Component {

  render () {
    
    return (
      <div className={styles.container}>
        <span className={styles.passwordText}>Password</span>
        <input type='password'   
        className={styles.wrapper} 
        placeholder='Введите пароль'
        onChange={
          (event) => {this.props.updateAuthData(event, "password")}}
        />
      </div>
      
           )
  }

}