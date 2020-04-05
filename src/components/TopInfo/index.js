import React, { Component } from "react";
import { FiUser, FiHeart } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class TopInfo extends Component {
  render() {
    return (
      <div className="top-info">
        <span>
          <FiHeart />
          <b>{this.props.likes}</b>
        </span>
        <span>
          <FiUser />
          <Link to="/perfil">
            {this.props.name}
          </Link>
        </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    likes: state.user.likes
  }
}

export default connect(mapStateToProps)(TopInfo)
