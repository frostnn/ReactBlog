import React, {Component} from 'react';
import styles from './style.module.scss'
import concatClasses from '../../../../../utils/concatClasses'

export default class NavButton extends Component { 
  render () {
    
    return (
      <div className={concatClasses(
        styles.wrapper, 
        (this.props.active && styles.active) || ""
        )} 
        onClick={this.props.cb}>
     {this.props.label}
      </div>
           )
  }

}