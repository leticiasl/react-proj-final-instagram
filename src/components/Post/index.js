import React, { Component } from "react";
import { FiHeart } from 'react-icons/fi';
import { connect } from 'react-redux';

class Post extends Component {
  likeAction = () => {
    this.props.dispatch({
      type: "UP_LIKE"
    })
  }

  render() {
    const post = this.props.post
    return (
      <div className="post">
        <div key={post.id} className="post-datails">
          <header>
            <img src={post.userPicture} alt="user" />
            <div className="post-user">
              <strong>{post.user}</strong>
              <span>{post.location}</span>
            </div>
          </header>
          <div className="post-image">
            <img src={post.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart onClick={this.likeAction} />
          </div>
          <p>{post.description}</p>
        </div>
      </div>
    );
  }
}

export default connect()(Post)

