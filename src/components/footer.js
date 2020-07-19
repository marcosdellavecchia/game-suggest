import React from "react";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="row top50">
        <div className="col-md-12 centrar">
          <p className="footer">
            Powered by{" "}
            <a
              className="api-attribution"
              target="_blank"
              rel="noopener noreferrer"
              href="https://rawg.io/apidocs"
            >
              RAWG Video Games API
            </a>{" "}
            -{" "}
            <a
              className="credits"
              href="https://github.com/marcosdellavecchia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hecho con{" "}
              <span role="img" aria-label="Purple heart">
                🧡
              </span>{" "}
              por Marcos DV
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
