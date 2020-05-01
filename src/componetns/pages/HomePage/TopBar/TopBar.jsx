import React, {Component} from 'react';
import styles from './TopBar.module.scss';
import {connect} from 'react-redux';
import mapStateToProps from '../../../../reducers/mapStateToProps';
import mapActionToProps from '../../../../reducers/mapActionToProps';
 class TopBar extends Component {

  render () {
    const {user, unsetUserAction} = this.props;
    return (
     <header className={styles.wrapper}>
      <div>{user.name}</div>
      <div onClick={unsetUserAction} className={styles.exit}>Выход</div>
     </header>
    )
  }
}

export default connect(mapStateToProps.global, mapActionToProps)(TopBar)