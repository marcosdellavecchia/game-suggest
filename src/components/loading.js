import React from "react";
import "./loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="loading">
        <div className="col-md-12 centrar">
          <img
            className="loading-animation"
            src="https://media.giphy.com/media/Mayt5Xp7hVE7ycNyok/giphy.gif"
            alt=""
          />
          <h3>Searching for games...</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loading;
