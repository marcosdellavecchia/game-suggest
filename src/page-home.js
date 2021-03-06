import React from "react";
import "./page-home.css";
import logo from "./logo-gs.png";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  onChange = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  state = {
    busqueda: "",
  };
  soonAlert = (e) => {
    alert("This button will be functional soon :)");
    e.preventDefault();
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img id="logo-home" src={logo} alt="" />
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
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search similar games
                </button>
                <button
                  className="btng"
                  onClick={this.soonAlert}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  I'm feeling lucky
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
