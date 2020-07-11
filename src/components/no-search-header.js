import React from "react";
import "./search-bar.css";
import logo from "../logo-gs.png";
import { Link } from "react-router-dom";

class NoSearchHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default NoSearchHeader;
