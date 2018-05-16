import React from 'react';
import './Square.css';
class Square extends React.Component {

  handleClick = e => this.state = {
    square: this.state.square.resize()
  };

  render() {
    const { square } = this.props;

    return (
      <div
        className="square"
        style={{
          width: square.length,
          height: square.length,
          left: square.left,
          top: square.top
          // TODO: center square
        }}
        onClick={this.props.handleClick(square)}
      >
      </div>
    );
  }
}

export default Square;
