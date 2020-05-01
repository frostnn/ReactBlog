import React, {Component} from 'react';
import styles from './style.module.scss'
import NavButton from './NavButton/NavButton';
import {connect} from 'react-redux';
import mapStateToProps from '../../../../reducers/mapStateToProps';
import mapActionToProps from '../../../../reducers/mapActionToProps';
 class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttons: [
        {
          label: 'Главная',
          id: 1
        },
        {
          label: 'Подписки',
          id: 2
        },
        {
          label: 'Комментарии',
          id: 3
        },
        {
          label: 'Настройки',
          id: 4
        },
      ]
    }
  }

  pickButton = (id) => {
    this.props.updateActiveButtonIdAction(id)
  }
 
  render () {
   console.log(this.props)
    return (
      <div className={styles.wrapper}>
      {
        this.state.buttons.map((button, index) => {
          return <NavButton label={button.label} 
          key={button.id}
          active={this.props.activeButtonId === button.id}
          cb={()=>{this.props.updateActiveButtonIdAction(button.id)}}
          />
        })
      }
      </div>
           )
  }
}



export default connect((store)=>({
  ...store.global, 
  ...store.navigate
}), 
mapActionToProps)
(NavBar);