import React from "react";
import "./game-card.css";
class GameCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <div className="item">
          <img className="pic img-fluid" src={this.props.img} alt="" />
          <p className="titulo">{this.props.titulo}</p>
        </div>
      </div>
    );
  }
}

export default GameCard;
