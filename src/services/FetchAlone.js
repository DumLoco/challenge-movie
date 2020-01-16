import React from "react";
import nullImg from "../img/null.png";

class FetchMovie extends React.PureComponent {
  state = {
    moviePoster: null,
    movieTitle: null,
    movieYear: null,
    url: `http://www.omdbapi.com/?apikey=fec0f00e&`,
    busquedaPeli: this.props.peli,
    busquedaPeli2: this.props.peli2
  };

  handleChange = () => {
    this.setState({
      busquedaPeli: this.props.peli
    });
  };

  outsideChange = change => {
    this.setState({
      busquedaPeli: change
    });
  };

  componentDidMount() {
    console.log("component did mount ( fetchAlone.js)");

    fetch(`${this.state.url}t=${this.state.busquedaPeli}`)
      .then(response => response.json())
      .then(resp =>
        this.setState({
          moviePoster: resp.Poster,
          movieTitle: resp.Title,
          movieYear: resp.Year,
          movieDirector: resp.Director,
          movieRuntime: resp.Runtime,
          movieActors: resp.Actors,
          moviePlot: resp.Plot
        })
      );
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive", nextProps);
  }

  render() {
    if (
      this.state.moviePoster !== "N/A" &&
      this.state.moviePoster !== undefined
    ) {
      return (
        <div>
          <div className="pruebaDiv">
            <img alt="" src={this.state.moviePoster}></img>
            <div>
              <h1>{this.state.movieTitle}</h1>
              <h5>Año: {this.state.movieYear}</h5>
              <h5>Director: {this.state.movieDirector}</h5>
              <h5>Actores: {this.state.movieActors}</h5>
              <h5>Duración: {this.state.movieRuntime}</h5>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="pruebaDiv">
          <img alt="" src={nullImg}></img>
          <div>
            <h2>Por favor ingresa un título en el campo de texto</h2>
          </div>
        </div>
      );
    }
  }
}
/*
const FetchMovie = props => {
  return <FetchAlone peli={props.peli} />;
};*/

export default FetchMovie;
