import React from "react";
import "./App.css";
import Navbar2 from "./Navbar/Navbar";
import FetchMovie from "./services/FetchAlone";
import nullImg from "./img/null.png";
import endPointX from "./Fetch/fetchFunc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchElement = React.createRef();
  }
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
  };

  onChangeMovie2 = titulo => {
    this.setState({
      inputValue: "",
      apretado: false
    });
  };

  onChangeMovie3 = titulo => {
    titulo = this.state.inputValue;
    console.log(this.fetchElement);
    //this.fetchElement.current.outsideChange(titulo);
    this.setState({ apretado: true });
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = (event, titulo) => {
    if (event.key === "Enter") {
      this.setState({ inputValue: event.target.value, apretado: true });
    }
  };

  renderPoster = props => {
    console.log(endPointX("aliens"));
    if (this.state.apretado === true) {
      return (
        <div>
          <FetchMovie ref={this.fetchElement} peli={props.valor} />
        </div>
      );
    } else {
      return (
        <div>
          <div className="pruebaDiv">
            <img alt="no img" src={nullImg}></img>
            <div>
              <h5 className="inv">Ingresa el título de cualquier película.</h5>
              <h5>
                Luego dale click a 'buscar Pelicula" para mostrar su info! click
                en "Restablecer" para buscar nuevamente.
              </h5>
            </div>
          </div>
        </div>
      );
    }
  };

  componentDidMount() {
    console.log("component did mount ( app.js)");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar2 />
        </header>
        <div className="jumbotron">
          <this.renderPoster valor={this.state.inputValue}></this.renderPoster>

          <div>
            <button
              className="btn btn-primary"
              onClick={() => this.onChangeMovie(this.state.inputValue)}
            >
              Buscar Pelicula
            </button>
            <input
              className="form-control"
              value={this.state.inputValue}
              placeholder="ingresar pelicula"
              onChange={event => this.handleChange(event)}
              onKeyPress={event => this.handleKeyPress(event)}
            ></input>
            <button
              className="btn btn-primary"
              onClick={() => this.onChangeMovie2(this.state.inputValue)}
            >
              Restablecer
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.onChangeMovie3(this.state.inputValue)}
            >
              prueba
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
