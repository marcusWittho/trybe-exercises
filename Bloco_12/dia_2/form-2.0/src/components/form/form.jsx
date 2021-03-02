import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <fieldset>
        <form>
          <label>
            Estão indo:
            <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Número de convidados:
            <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleChange} />
          </label>
        </form>
      </fieldset>
    );
  }
}

export default Form;