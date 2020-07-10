import React from "react";
import "./loading.css";

function Error() {
  return (
    <React.Fragment>
      <div className="loading">
        <div className="col-md-12 centrar">
          <h3>Upa! Algo malio sal :(</h3>
          <p>No pudimos encontrar el juego que estás buscando.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
