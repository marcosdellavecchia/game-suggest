import React from "react";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="row top50">
        <div className="col-md-12 centrar">
          <p>
            Copyright GameSuggest 2020 - Powered by{" "}
            <a
              className="api-attribution"
              target="_blank"
              href="https://rawg.io/apidocs"
            >
              RAWG Video Games Database API
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
