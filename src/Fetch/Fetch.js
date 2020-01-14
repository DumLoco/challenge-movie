import React from "react";

//let apiKey = "fec0f00e";
//const url = `http://www.omdbapi.com/?apikey=${apiKey}&`;
//let busquedaPeli = "alien";
/*
let properFetch = () => {
  fetch(`${url}t=${busquedaPeli}`)
    .then(response => response.json())
    .then(resp => {
      let retorno3 = {
        Title: "algo",
        Year: "algo",
        Poster: "algo"
      };
      retorno3.Title = resp.Title;
      retorno3.Year = resp.Year;
      retorno3.Poster = resp.Poster;
      console.log(retorno3);
      return retorno3;
    });
};*/

class ProperFetch2 extends React.Component {
  state = {
    isLoading: false,
    //nombrePeli: "inicial",
    //yearPeli: "inicial",
    //posterPeli: "inicial"
    peli: {}
  };

  fetchHandler = props => {
    let apiKey = "fec0f00e";
    let url = `http://www.omdbapi.com/?apikey=${apiKey}&`;

    let busquedaPeli = this.props.peli;
    this.setState({
      isLoading: true
    });
    fetch(`${url}t=${busquedaPeli}`)
      .then(response => response.json())
      .then(resp => {
        console.log(resp);
        this.setState({
          peli: resp,
          isLoading: false
        });

        console.log(this.state.peli);
      });
  };

  /*awaitFetch = async () => {
    await this.fetchHandler();
  };*/

  awaitFetch = () => {
    this.fetchHandler();
  };

  componentDidMount() {}
  render() {
    /*return (
      <div>
        <img alt="poster" src={this.state.peli.Poster}></img>
        <button onClick={() => this.awaitFetch()}>prueba fetch</button>
      </div>
    );
*/

    const { isLoading, peli } = this.state;
    if (!isLoading /*|| peli.Title === undefined*/) {
      return (
        <div>
          <h2>LOADING...</h2>
          <button onClick={() => this.awaitFetch()}>prueba fetch</button>
        </div>
      );
    }
    return (
      <div>
        {console.log(this.state.peli)}
        <img alt="poster" src={this.state.peli.Poster}></img>
        <button onClick={() => this.awaitFetch()}>prueba fetch</button>
      </div>
    );
  }
}

export default ProperFetch2;
