import React, { Component } from "react";
import { connect } from "react-redux";
import Storie from '../Storie'

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="user-info">
          <img
            alt="Perfil"
            src="https://randomuser.me/api/portraits/women/25.jpg"
          />
          <div className="user-bio">
            <strong>{this.props.user.name}</strong>
            <span>{this.props.user.username}</span>
          </div>
        </div>

        <div className="stories">
          <h2>Stories</h2>
          {this.props.stories !== undefined && (
            this.props.stories.map((storie) => (
              <Storie key={storie.id} storie={storie}  />
            ))
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    stories: state.stories
  }
}


export default connect(mapStateToProps)(Sidebar)