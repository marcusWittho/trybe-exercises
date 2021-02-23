import React from 'react';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    console.log('Botão 1');
  }

  render() {
    return (
      <>
        <span onClick={ this.handleClick }>
          <Button />
        </span>
      </>
    );
  }
}

export default App;
