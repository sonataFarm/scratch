export class Deck {
  constructor() {
    this.replenishCards();
  }

  replenishCards() {
    this.cards = Card.SUITS.reduce((cards, suit) => [
      ...cards,
      ...Card.VALUES.map(value => new Card(value, suit))
    ], []);

    this.shuffle();
  }

  shuffle() {
    const unshuffledCards = this.cards;
    this.cards = [];

    while (unshuffledCards.length) {
      const randIdx = Math.floor(Math.random() * unshuffledCards.length);
      this.cards.push(...unshuffledCards.splice(randIdx, 1));
    }
  }

  draw(n) {
    // draw first n cards from deck.
    // if this exceeds available cards, replenish and shuffle
    const hand = [];

    while (n) {
      hand.push(this.cards.pop());
      n--;
      if (!this.cards.length) this.replenishCards();
    }

    return hand;
  }
}

export class Card {
  static SUITS = [ 'aces', 'diamonds', 'clubs', 'hearts' ];
  static VALUES = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];

  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}
