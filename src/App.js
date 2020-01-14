import React from "react";
import "./App.css";
import Navbar2 from "./Navbar/Navbar";
import { Button } from "reactstrap";
import FetchMovie from "./services/FetchAlone";
import nullImg from "./img/null.png";

class App extends React.Component {
  state = {
    apretado: false,
    apretado2: false,
    inputValue: ""
  };

  onChangeMovie = titulo => {
    this.setState({
      inputValue: titulo,
      apretado: true
    });
    //console.log(this.state.inputValue);
  };

  onChangeMovie2 = titulo => {
    this.setState({
      inputValue: "",
      apretado: false
    });
    //console.log(this.state.inputValue);
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    //this.onChangeMovie(this.state.inputValue);
  };

  renderPoster = props => {
    // console.log(props.valor);
    if (this.state.apretado === true) {
      return (
        <div>
          <FetchMovie peli={props.valor} />
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
  };

  componentDidMount() {
    // data = this.onChangeMovie();
    console.log("component did mount ( app.js)");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar2 />
        </header>

        <this.renderPoster valor={this.state.inputValue} />
        <Button onClick={() => this.onChangeMovie(this.state.inputValue)}>
          Buscar Pelicula
        </Button>
        <input
          value={this.state.inputValue}
          placeholder="ingresar pelicula"
          onChange={event => this.handleChange(event)}
        ></input>

        <Button onClick={() => this.onChangeMovie2(this.state.inputValue)}>
          Resetear
        </Button>
      </div>
    );
  }
}

export default App;
