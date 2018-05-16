import React from 'react';
import Square from './Square';

const SquareList = ({ squares, handleSquareClick }) => (
  <ul>
    {squares.map(square => <Square key={square.id} square={square} handleClick={handleSquareClick} />)}
  </ul>
)

export default SquareList;
