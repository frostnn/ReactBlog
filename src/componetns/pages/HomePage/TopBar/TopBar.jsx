import React, {Component} from 'react';
import styles from './TopBar.module.scss';
import {connect} from 'react-redux';
import mapStateToProps from '../../../../reducers/mapStateToProps';
import mapActionToProps from '../../../../reducers/mapActionToProps';
import {Link} from 'react-router-dom'
 class TopBar extends Component {

  render () {
    const {user, unsetUserAction} = this.props;
    return (
     <header className={styles.wrapper}>
      <div>{user.name}</div>
      <Link to='/'>
        <div onClick={unsetUserAction} className={styles.exit}>Выход</div>
      </Link>
      
     </header>
    )
  }
}

export default connect(mapStateToProps.global, mapActionToProps)(TopBar)