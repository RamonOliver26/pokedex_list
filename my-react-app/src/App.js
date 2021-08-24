import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import DisplayPokemon from './components/DisplayPokemons';

function App() {

  const [pokemon, setPokemon] = useState([])
  const [loadMore, setLoadMore] = useState ()


  const get20Pokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=53')
    .then ((response) => {
      console.log (response);
      setPokemon(response.data.results);
      setLoadMore(response.data.next)
    })
    .catch((err) => {
      console.log (err)
    })
  }

    useEffect (() => {
      get20Pokemon();
    })
    
    const [quantidade, setQuantidade] = useState([])

    const get30pokemon = () => {
      axios.get ('https://pokeapi.co/api/v2/pokemon')
      .then ((response) => {
        console.log (response);
        setQuantidade(response.data.results)
      })
    }
    



  return (
    <div class="App-container">
        <div class="Title">
          <h1>POKEDEX</h1>
           <h3>Selecione quantos pokemons será carregado na lista:</h3>

           <form onSubmit={quantidade}>
           <select name="Quantidade" value={quantidade} onChange={quantidade =>setQuantidade(get30pokemon.target)}>
            <option value="">Selecione</option>
            <option value="">10 pokemons</option>
            <option value="">20 pokemons</option>
            <option value="quantidade">30 pokemons</option>
          </select>
          <button type="Submit">Aplicar</button>
          </form>

        </div>
        <br/>
        <br/>
        <br/>

        <DisplayPokemon pokemon={pokemon}/>
    </div>
  );
}

export default App;