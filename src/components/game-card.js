import React from "react";
import "./game-card.css";
import Loading from "./loading.js";
import Error from "./error.js";
import { Link } from "react-router-dom";
class GameCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={"/juego?" + this.props.titulo}>
          <div className="item">
            <img className="pic img-fluid" src={this.props.img} alt="" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default GameCard;
