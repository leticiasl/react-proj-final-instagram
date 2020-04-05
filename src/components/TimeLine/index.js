import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi';
import { connect } from 'react-redux';
import Post from '../Post'

class TimeLine extends Component {

  render() {
    return (
      <div className="post">
        {this.props.posts !== undefined && (
          this.props.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(TimeLine)
