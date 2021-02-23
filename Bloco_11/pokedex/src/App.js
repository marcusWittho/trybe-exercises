import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Pokedex from './components/pokedex/Pokedex';
import PokemonsList from './data';
import Button from './components/button/Button';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Button style="previous" text="Anterior"/>
        <Pokedex pokemons={ PokemonsList }/>
        <Button style="next" text="Próximo"/>
      </div>
      <div className="typeContainer">
        <Button style="fire" text="Fire"/>
        <Button style="psychic" text="Psychic"/>
      </div>
    </>
  );
}

export default App;
