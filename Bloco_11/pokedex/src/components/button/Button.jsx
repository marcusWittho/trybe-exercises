import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className={ this.props.style }>{ this.props.text }</button>
    );
  }
}

export default Button;
