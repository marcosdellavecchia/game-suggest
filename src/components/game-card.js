import React from "react";
import "./game-card.css";
import { Link } from "react-router-dom";
class GameCard extends React.Component {
  render() {
    return (
      //SE AGREGO ESTE DIV CON CLASE ROW PARA HACER LOS GAME CARDS RESPONSIVE
      <div className="row">
        <div className="col-3">
          <Link to={"/juego?" + this.props.titulo}>
            <div className="item">
              <img className="pic img-fluid" src={this.props.img} alt="" />
              <p className="titulo">{this.props.titulo}</p>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default GameCard;
