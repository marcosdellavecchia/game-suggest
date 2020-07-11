import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import NoSearchHeader from "./components/no-search-header.js";
import SimilarGame from "./components/similar-game.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import "./page-game.css";

class PageGame extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      results: [
        {
          platforms: [
            {
              platform: "",
            },
          ],
          genres: [{}],
        },
      ],
    },
    data2: {
      results: [{}],
    },
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let juego = this.props.history.location.search.substr(1);
    let url = "https://api.rawg.io/api/games?search=" + juego;
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();

    //Catch de errores en la llamada a la API eliminado

    //Slug del juego
    let slug = data.results[0].slug;

    //Segundo fetch para sacar los suggested games
    fetch("https://api.rawg.io/api/games/" + slug + "/suggested")
      .then((response2) => {
        return response2.json();
      })
      .then((data2) => {
        this.setState({
          error: false,
          loading: false,
          data: data,
          data2: data2,
        });
      });

    this.setState({
      error: false,
      loading: false,
      data: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NoSearchHeader />
        {this.state.loading && <Loading />}
        {this.state.error && <Error />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                className="pic-page-game top50 margenes50"
                src={this.state.data.results[0].background_image}
                alt=""
              />
              <h2>{this.state.data.results[0].name}</h2>
              <p>{this.state.data2.results[0].short_description}</p>
            </div>
          </div>
          <SimilarGame
            suggested={this.state.data2.results}
            releasedate={this.state.data.results[0].released}
            score={this.state.data.results[0].score}
            platform={this.state.data.results[0].platforms[0].platform.name}
            genre={this.state.data.results[0].genres[0].name}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PageGame;
