import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.initialStatus || 'OFF'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      status: this.state.status === 'OFF' ? 'ON' : 'OFF'
    });
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.status}</button>;
  }
}

export default ToggleButton;
