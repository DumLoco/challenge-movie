import React from "react";
import nullImg from "../img/null.png";

class FetchAlone extends React.PureComponent {
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

  componentDidMount() {
    console.log("component did mount ( fetchAlone.js)");

    fetch(`${this.state.url}t=${this.state.busquedaPeli}`)
      .then(response => response.json())
      .then(resp =>
        this.setState({
          moviePoster: resp.Poster,
          movieTitle: resp.Title,
          movieYear: resp.Year
        })
      );
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive", nextProps);
  }

  render() {
    console.log(this.state.moviePoster);
    let pelicula = this.props.peli;
    let pelicula2 = this.props.peli2;
    if (
      this.state.moviePoster !== "N/A" &&
      this.state.moviePoster !== undefined
    ) {
      return (
        <div>
          <img alt="" src={this.state.moviePoster}></img>
          <h2>{this.state.movieTitle}</h2>
        </div>
      );
    } else {
      return (
        <div>
          <img alt="" src={nullImg}></img>
          <h2>{this.state.movieTitle}</h2>
        </div>
      );
    }
  }
}

const FetchMovie = props => {
  return <FetchAlone peli={props.peli} />;
};

export default FetchMovie;
