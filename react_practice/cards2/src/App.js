import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Deck } from './Card';

const Card = ({ card }) => (<li>{card.value} of {card.suit}</li>);
const Hand = ({ cards}) => (<ul>{cards.map(
  (card, idx) => <Card card={card} key={idx} />
)} </ul>);

class App extends Component {
  constructor(props) {
    super(props);
    this.cards = new Deck();
  }

  componentWillMount() {
    this.handleHit();
  }

  handleHit = () => this.setState({ hand: this.cards.draw(4) })

  render() {
    return (
      <div className="App">
        <Hand cards={this.state.hand} />
        <button onClick={this.handleHit}>Hit Me!</button>
      </div>
    );
  }
}


export default App;
