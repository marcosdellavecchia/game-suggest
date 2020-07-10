import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import PageGame from "./page-game.js";
import Footer from "./components/footer.js";
import Layout from "./components/layout.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/busqueda" component={PageSearchResult}></Route>
            <Route exact path="/juego" component={PageGame}></Route>
            <Route exact path="/" component={PageHome}></Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
