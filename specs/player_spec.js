const assert = require('assert');
const Player = require('../player');

describe('Player', function () {

  let player;

  beforeEach(() => {
    player = new Player("Colin");

  })

  it('has a name', function () {
    assert.strictEqual(player.name, "Colin");
  })

  it('has empty hand', function () {
    assert.strictEqual(player.hand.length, 0);
  })

  it('can take a card', function () {
    const mockCard = {};
    player.takeCard(mockCard);
    assert.strictEqual(player.hand[0], mockCard)
  })


})
