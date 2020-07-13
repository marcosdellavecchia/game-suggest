import React from "react";
import "./search-bar.css";
import logo from "../logo-gs.png";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = (e) => {
    e.preventDefault();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  id="buscar"
                  type="text"
                  name="busqueda"
                  value={this.props.busqueda}
                  placeholder="Enter any videogame you like"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}
export default SearchBar;
