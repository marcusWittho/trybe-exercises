import React from 'react';
import Pokemon from '../pokemon/Pokemon';
import { PokedexStyled } from './PokedexStyled';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props

    return (
      <PokedexStyled>
        <Pokemon pokemon={ pokemons[0] } />
        {/* {pokemons.map(pokemon =>
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />)} */}
      </PokedexStyled>
    );
  }
}

export default Pokedex;
