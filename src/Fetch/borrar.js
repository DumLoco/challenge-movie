import React from "react";

import "./styles.css";

// componente para renderear un pokemon
class Pokemon extends React.Component {
  render() {
    const { pokemon, id } = this.props;
    return (
      <div className="pokemon--species">
        <div className="pokemon--species--container">
          <div className="pokemon--species--sprite">
            <img
              alt=""
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
          </div>
          <div className="pokemon--species--name"> {pokemon.name} </div>
        </div>
      </div>
    );
  }
}

//class para fetchear una lista de pokemons desde la API y luego mostrarlos con el componente Pokemon

class PokemonList extends React.Component {
  state = {
    species: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=32")
      .then(res => res.json())
      .then(response => {
        this.setState({
          species: response.results,
          loading: false
        });
      });
  }

  renderList = species =>
    species.map((pokemon, index) => (
      <Pokemon key={pokemon.name} id={index + 1} pokemon={pokemon} />
    ));

  render() {
    const { loading, species } = this.state;

    if (loading || species.length === 0) {
      return <p>loading...</p>;
    }

    return this.renderList(species);
  }
}

class PokeApp extends React.Component {
  render() {
    return (
      <div className="pokeapp">
        <h1> Probando PokeAPI </h1>
        <PokemonList />
      </div>
    );
  }
}
