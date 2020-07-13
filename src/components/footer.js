import React from "react";
import "./footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="row top50 flex">
        <div className="col-md-12">
          <p className="footer centrar">
            Copyright GameSuggest 2020 - Powered by{" "}
            <a
              className="api-attribution"
              target="_blank"
              href="https://rawg.io/apidocs"
            >
              RAWG Video Games API
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
