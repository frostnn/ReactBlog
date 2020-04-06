import React, {Component} from 'react';
import styles from './TopBar.module.scss';

export default class TopBar extends Component {

  render () {
    
    return (
     <header className={styles.wrapper}>
      <div>{this.props.name}</div>
      <div onClick={this.props.unsetLoggedUser}>Выход</div>
     </header>
           )
  }

}