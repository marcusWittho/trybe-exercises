import React from 'react';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    console.log("constructor");
  }

  render() {
    console.log("render")
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          soma
        </button>
        <CounterDisplay value={ this.state.counter } />
      </div>
    );
  }
}

export default App;
