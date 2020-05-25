import React from 'react';
import Post from './Post/Post';
import styles from './style.module.scss';
import { connect } from 'react-redux';
import mapStateToProps from '../../../../../reducers/mapStateToProps';
import mapActionToProps from '../../../../../reducers/mapActionToProps';
import axios from 'axios';
import RoundButton from '../../../../common/RoundButton/RoundButton';
import Editor from '../../../../common/Editor/Editor';

class PostSection extends React.Component {

  timerId;
  fetchPosts = async () => {
    try {
      const {data} = await axios.get('http://localhost:8888/api/posts')
      this.props.writePosts(data)
    } catch(e) {
      console.log(e)
    }
  }

  createPost = async ()  => {
    try {
      const {
       data: {post},
       } = await axios.post('http://localhost:8888/api/posts', {
        id: Math.random(),
        header: 'new post',
        connect: 'content'
    });
    this.props.writePosts([post]);
    }catch(e) {
      console.log(e)
    }
  } 

  deletePost = async (id) => {
    try {
      await axios({
        url: 'http://localhost:8888/api/posts',
        method: 'DELETE',
        param: {id}
      });
    }catch(e) {

    }
  }

  render() {
    
    return ( 
      <section className={styles.wrapper}>
       {this.props.posts.map(post => {
         return (
                <Post 
                  self={post} 
                  key={post.id} 
                  unfolding={ this.props.posts.length < 3}
                />
        )
       })}
       <div style={{position: "fixed", bottom: 30, right: 30}}>
        <RoundButton func={this.createPost}/>
       </div>
       
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

export default connect(mapStateToProps.global, mapActionToProps)(PostSection)