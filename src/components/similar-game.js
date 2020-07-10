import React from "react";
import GameCard from "./game-card.js";
class SimilarGame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Similar games</h5>
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <GameCard img="https://place-hold.it/350x350" titulo="Game Name" />
          </div>
          <div className="col-md-3">
            <GameCard img="https://place-hold.it/350x350" titulo="Game Name" />
          </div>
          <div className="col-md-3">
            <GameCard img="https://place-hold.it/350x350" titulo="Game Name" />
          </div>
          <div className="col-md-3">
            <GameCard img="https://place-hold.it/350x350" titulo="Game Name" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarGame;
