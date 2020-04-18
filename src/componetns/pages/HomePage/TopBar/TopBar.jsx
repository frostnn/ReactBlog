import React, {Component} from 'react';
import styles from './TopBar.module.scss';
import {connect} from 'react-redux';
import mapStateToProps from '../../../../reducers/mapStateToProps';
import mapActionToProps from '../../../../reducers/mapActionToProps';
 class TopBar extends Component {

  render () {
    console.log(this.props)
    return (
     <header className={styles.wrapper}>
      <div>{this.props.user.name}</div>
      <div onClick={this.props.unsetUserAction} className={styles.exit}>Выход</div>
     </header>
    )
  }
}

export default connect(mapStateToProps, mapActionToProps)(TopBar)