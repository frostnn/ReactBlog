import React, {Component} from 'react';
import styles from './style.module.scss'
import NavButton from './NavButton/NavButton';

export default class NavBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeButtonId: 1,
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
    this.setState({activeButtonId: id})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeButtonId !== this.state.activeButtonId || false
  }
  render () {
    console.log(this.state)
    return (
      <div className={styles.wrapper}>
      {
        this.state.buttons.map((button, key) => {
          return <NavButton label={button.label} 
          key={button.id}
          active={this.state.activeButtonId === button.id}
          cb={()=>{this.pickButton(button.id)}}
          />
        })
      }
      </div>
           )
  }

}