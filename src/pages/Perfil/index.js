import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import Helmet from "react-helmet";

class Perfil extends Component {
  componentDidMount = async () => {
    await axios.get("http://localhost:4000/perfil")
      .then(response => {
        this.props.dispatch({
          type: "SET_PERFIL",
          payload: response.data
        })
      })
  }

  render() {
    const perfil = this.props.perfil
    return (
      <>
        <Helmet>
          <title>Instagram - Perfil</title>
        </Helmet>
        <div className="perfil">
          <div className="imagem">
            <img src={perfil.userPicture} />
          </div>
          <div className="detalhes">
            <h2>{perfil.name}</h2>

            <p>Idade: {perfil.age}</p>
            <p>Data do cadastro: {perfil.joinAt}</p>
            <p>User Bio: {perfil.bio}</p>
            <p>Site: {perfil.site}</p>
            <h3>Stacks</h3>
            <ul>
              {perfil.stacks !== undefined && (
                perfil.stacks.map((stack, index) => (
                  <li key={index}>{stack}</li>
                ))
              )}
            </ul>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    perfil: state.perfil
  }
}


export default connect(mapStateToProps)(Perfil)