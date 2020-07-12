import React from "react";
import GameCard from "./game-card.js";
class SimilarGame extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>We suggest you this similar games</h5>
            <p></p>
            <hr />
          </div>
        </div>

        <div className="row flex">
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
      </React.Fragment>
    );
  }
}

export default SimilarGame;
