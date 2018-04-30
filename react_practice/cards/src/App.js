import React, { Component } from 'react';
import card from './card';
import logo from './logo.svg';
import './App.css';
import { Card, Deck } from './card';

const CardComponent = ({ card }) => (
  <li>
    { card.value } of { card.suit }
  </li>
);

const CardList = ({ cards }) => (
  <ul>
    {cards.map(card => <CardComponent card={card} />)}
  </ul>
)

class App extends Component {
  deck = new Deck();
  state = {
    hand: []
  };

  constructor(props) {
    super(props);
  }

  hit = () => this.setState({
    hand: this.deck.draw(4)
  });

  render() {
    return (
      <div className="App">
        <CardList cards={this.state.hand} />
        <button onClick={this.hit}>Hit Me!</button>
      </div>
    );
  }
}

export default App;
