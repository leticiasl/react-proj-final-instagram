import React, { Component } from "react";
import axios from 'axios'
import { connect } from "react-redux";
import Sidebar from "../../components/Sidebar";
import TimeLine from "../../components/TimeLine";
import Helmet from "react-helmet"


class Home extends Component {

  componentDidMount = async () => {
    await axios.get("http://localhost:4000/user")
      .then(response => {
        this.props.dispatch({
          type: "SET_USER",
          payload: response.data
        })
      })

    await axios.get("http://localhost:4000/stories")
      .then(response => {
        this.props.dispatch({
          type: "SET_STORIES",
          payload: response.data
        })
      })

    await axios.get("http://localhost:4000/posts")
      .then(response => {
        this.props.dispatch({
          type: "SET_POSTS",
          payload: response.data
        })
      })
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Instagram - Home</title>
        </Helmet>
        <div className="home">
          <TimeLine />
          <Sidebar />
        </div>
      </>
    );
  }
}

export default connect()(Home)
