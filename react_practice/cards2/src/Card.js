import _ from 'lodash';

export class Deck {
  constructor() {
    this.generateCards();
  }

  generateCards() {
    this.cards = Card.SUITS.reduce((cards, suit) => [
      ...cards,
      ...Card.VALUES.map(value => new Card(suit, value))
    ], []);

    this.shuffle();
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
  }

  draw(n) {
    const hand = [];

    while (hand.length < n) {
      hand.push(this.cards.pop());
      if (this.cards.length === 0) this.generateCards();
    }

    return hand;
  }
}

export class Card {
  static SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
  static VALUES = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}
window.Deck = Deck;
