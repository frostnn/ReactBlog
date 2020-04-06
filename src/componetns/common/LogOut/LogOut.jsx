import React, {Component} from 'react';
import styles from './LogOut.module.scss';

export default class LogOut extends Component {
   LogOutBtn = () => {
    this.setState((prevState) => {
      return {
        user: null
      }
      
    }) 
  }
  render () {
    
    return (
     
      <button  
        className={styles.LogOutBtn}
        onClick={this.LogOutBtn}>
        {this.props.text}
      </button>

           )
  }

}