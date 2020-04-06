import React, {Component} from 'react';
import styles from './style.module.scss';

export default class AcceptButton extends Component {
  
  render () {
  
        return (
        <button  
          className={styles.wrapper}
          onClick={this.props.submit}>
          {this.props.text}
        </button>
           )
  }

}

// цвет кнопки задается пропсом
// стилизация формы
//создать в инпуте состояние и сохранять его