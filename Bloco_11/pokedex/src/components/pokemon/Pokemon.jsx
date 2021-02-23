import React from 'react';
import { PokemonContainer } from './PokemonStyled';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon

    return (
      <PokemonContainer>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>{ value }{ measurementUnit }</p>
        </div>
        <img src={ image } alt={ `${name} gif` } />
      </PokemonContainer>
    );
  }
}

export default Pokemon;
