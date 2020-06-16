import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import {Component} from 'react';
import "./App.css"
import PokeCard from './components/PokeCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons : [],
      pokemonDetails : [],
    }    
  }

  componentDidMount() {
    this.getMorePokemon();
  }

  getMorePokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data) {
        this.setState({pokemons : data.results}, () => {
          this.state.pokemons.map(pokemon => {
            fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
              if (data) {
                var temp = this.state.pokemonDetails
                temp.push(data)
                this.setState({pokemonDetails: temp})
              }            
            })
            .catch(console.log)
          })
        })        
      }
    })
    .catch(console.log)
  }

  render() {
    const {pokemonDetails} = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon, index) => {
      return (<PokeCard pokemon={pokemon} />);
    });

    return (
      <div className="container">
        <div className="card-columns">
          {renderedPokemonList}
        </div>
      </div>
    );
  }
}

export default App;
>>>>>>> dev_0616
