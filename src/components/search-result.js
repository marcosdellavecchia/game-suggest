import React, { Component } from "react";
import GameCard from "./game-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      results: [],
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData("https://api.rawg.io/api/games?search=" + termino);
  }

  fetchData = async (url) => {
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    //Catch de errores en la llamada a la API
    if (data.results === undefined) {
      this.setState({
        loading: false,
        error: true,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error />}
        <div className="container">
          <div className="row flex">
            {this.state.data.results.map((juego, i) => {
              return (
                <GameCard
                  img={juego.background_image}
                  titulo={juego.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
