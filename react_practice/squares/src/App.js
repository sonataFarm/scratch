import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SquareClass from './SquareClass';
import SquareList from './SquareList';

class App extends Component {
  state = {
    squares: []
  };

  handleSquareClick = square => e => {
    console.log('squareClick');
    e.stopPropagation();
    square.resize();
    const idx = this.state.squares.indexOf(square);
    const nextSquares = this.state.squares.slice();
    nextSquares.splice(idx, 1, square)
    this.setState({
      squares: nextSquares
    });
  }

  handleClick = e => {
    console.log('appClick');
    this.setState({
      squares: [
        ...this.state.squares,
        new SquareClass(e.clientX, e.clientY)
      ]
    })
  }

  render() {
    return (
      <div className="app-container" onClick={this.handleClick}>
        <SquareList
          squares={this.state.squares}
          handleSquareClick={this.handleSquareClick}
        />
      </div>
    );
  }
}

export default App;
