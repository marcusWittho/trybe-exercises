import React from 'react';
import { HeaderStyled } from './HeaderStyled';

class Header extends React.Component {
  render() {
    return (
      <>
        <HeaderStyled>
          <h1>Pokedex</h1>
        </HeaderStyled>
      </>
    );
  }
}

export default Header;
