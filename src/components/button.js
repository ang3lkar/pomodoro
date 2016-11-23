import React from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.startCountdown();
  }

  render() {
    return (
      <button disabled={this.props.disabled} onClick={this.handleClick} className="button">{this.props.text}</button>
    );
  }
}
