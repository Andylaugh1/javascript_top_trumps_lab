const assert = require('assert');
const Game = require('../game');
const Card = require('../card')

describe ('Game', function () {
  let game;

  beforeEach(() => {
    game = new Game();
  })

  it('should deal the top card', () => {
    const topCard = game.topCard();
    const card1 = new Card({
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    });

    assert.deepStrictEqual(card1, topCard)
  })

  it('should deal the next top card', () => {
    game.topCard()
    const topCard = game.topCard();
    const card1 = new Card({
      name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5
    });

    assert.deepStrictEqual(card1, topCard)
  })
})
