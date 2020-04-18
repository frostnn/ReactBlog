import React, {Component} from "react";
import Post from './Post/Post'
import styles from './style.module.scss'
import server from '../../../../../mocServer'


export default class PostSection extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts: [],
    };
   
  }
  timerId;
  fetchPosts = () => {
    this.timerId = setTimeout(()=>{
      this.setState({posts: server.posts});
    }, 2000)
   
  }

  render() {
    this.fetchPosts();
    return ( 
      <section className={styles.wrapper}>
       {this.state.posts.map((post) => {
         return <Post 
                  self={post} 
                  key={post.id} 
                  unfolding={( this.state.posts.length < 3)}/>
       })}
      </section>
    )
  }
  componentDidMount() {
    this.fetchPosts();
  }
  componentWillMount() {
    clearTimeout(this.timerId)
  }
}