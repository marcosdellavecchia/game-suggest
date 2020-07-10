import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SimilarGame from "./components/similar-game.js";
import "./page-game.css";

class PageGame extends Component {
  state = {
    busqueda: "",
  };
  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                className="pic-page-game top50 margenes50"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfcqWHw02pONzouuJ9LpXl_uF5ViP2uXq52A&usqp=CAU"
                alt=""
              />
              <h2>Diablo III</h2>
              <p>
                Diablo III es un videojuego de rol de acción, desarrollado por
                Blizzard Entertainment. Ésta es la continuación de Diablo II y
                la tercera parte de la serie que fue creada por la compañía
                estadounidense Blizzard. Su temática es de fantasía oscura y
                terrorífica.
              </p>
            </div>
          </div>
          <SimilarGame />
        </div>
      </React.Fragment>
    );
  }
}

export default PageGame;
