import React, {Component} from "react";
import styles from './style.module.scss'
import concatClasses from "../../../../../../utils/concatClasses";

export default class Post extends Component {
state = {
  isOpened: false,
}
toggleHeightPost = () => {
  this.setState({isOpened: !this.state.isOpened})
}

shouldComponentUpdate(nextProps, nextState, nextContent) {
  return true
}

static getDerivedStateFromProps(nextProps, prevState){
  return {
    isOpened: nextProps.unfolding
  }
}
  render() {
    return ( 
      <article className={concatClasses(styles.wrapper, 
        this.state.isOpened && styles.opened
        )}
        onClick={this.toggleHeightPost}
        >
        <header>{this.props.self.header}</header>
        <main>
          <pre>{this.props.self.content}</pre>
        </main>
      </article>
    )
  }
}