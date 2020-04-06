import React, {Component} from 'react';
import styles from './style.module.scss';

export default class TextInput extends Component {
  render () {
    return (
      <div className={styles.container}>
        <span className={styles.loginText}>Login</span>
        <input type='text' 
        className={styles.wrapper} 
        placeholder='Введите логин'
        onChange={
          (event) => {this.props.updateAuthData(event, "login")}}/>
       </div>
           )
  }

}

