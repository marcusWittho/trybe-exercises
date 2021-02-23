import React from 'react';
import './App.css';

class Form extends React.Component {
  constructor() {
    super()

    // this.handleTextAreaChange = this.handleTextAreaChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    }
  }

  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <h1>Estados e React: Ferramenta incrível ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual é o seu Estado favorito! Do Brasil ou do React, você quem sabe!
            <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          </label>

          <label>
            Nome
            <input name="nome" type="text" value={this.state.nome} onChange={this.handleChange} />
          </label>
        </form>

        <label>
          Idade
          <input name="idade" type="number" value={this.state.idade} onChange={this.handleChange} />
        </label>

        <label>
          Vai comparecer à conferência?
        </label>
          <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.handleChange} />

        <label>
          Escolha sua palavra chave favorita:
          <select name="palavraChaveFavorita" value={this.state.palavraChaveFavorita} onChange={this.handleChange}>
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
