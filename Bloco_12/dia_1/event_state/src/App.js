import React from 'react';
import './App.css';
import Button from './components/Button';

class App extends React.Component {
  constructor() {
    super(); // Funçlão chamada para garatir que a lógica interna do react rode antes da minha

    // this.handleClick_1 = this.handleClick_1.bind(this); // Função que vincula o 'this' à nossa função

    this.state = {
      numberOfClicks: 0
    };
  }

  handleClick = () => {
    this.setState((beforeState, _props) => ({
      numberOfClicks: beforeState.numberOfClicks + 1
    }));
    console.log(this.state.numberOfClicks);
  }

  render() {
    return (
      <>
        <span onClick={this.handleClick}>
          <Button />
        </span>
      </>
    );
  }
}

export default App;
