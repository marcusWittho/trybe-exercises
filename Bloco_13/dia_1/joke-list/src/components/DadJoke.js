import fetch from 'node-fetch';
import React, { Component } from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };

    this.fetchJoke = this.fetchJoke.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
  }

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'application/json' } };
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
        const requestObject = await requestReturn.json();
        this.setState({
          jokeObj: requestObject,
          loading: false,
        })
      })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{ this.state.jokeObj.joke }</p>
        <button type="button" onClick={ this.saveJoke }>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, loading } = this.state;
    const loadingElement = <span>Loading...</span>

    return (
      <div>
        <span>
          { storedJokes.map(({ id, joke }) => (<p key={ id }>{ joke }</p>)) }
        </span>

        <p>{ loading ? loadingElement : this.renderJokeElement() }</p>
      </div>
    );
  }
}

export default DadJoke;
