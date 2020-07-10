import React from "react";
import "./loading.css";

function Loading() {
  return (
    <React.Fragment>
      <div className="loading">
        <div className="col-md-12 centrar">
          <h3>Buscando titulos similares...</h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Loading;
