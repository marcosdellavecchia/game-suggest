import React from "react";
import GameCard from "./game-card.js";
class SimilarGame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar games</h5>
            <p></p>
            <hr />
          </div>
        </div>

        <div className="row">
          {this.props.suggested.slice(0, 4).map((item, i) => {
            return (
              <GameCard
                img={item.background_image}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>

        {/* INFORMACION DEL JUEGO */}

        {/* <div className="row">
          <div className="col-md-3">
            <h6>Release date</h6>
            <p>{this.props.releasedate}</p>
          </div>
          <div className="col-md-3">
            <h6>Metacritic score</h6>
            <p>{this.props.score}</p>
          </div>
          <div className="col-md-3">
            <h6>Platforms</h6>
            <p>{this.props.platform}</p>
          </div>
          <div className="col-md-3">
            <h6>Genres</h6>
            <p>{this.props.genre}</p>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default SimilarGame;
