const assert = require('assert');
const Card = require('../card');

describe ('Card', function () {

  let card;

  beforeEach(function () {
    const superman = {
      name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7
    }

    card = new Card(superman)
  })

  it('should have a name', function () {

    assert.strictEqual(card.name, "Superman")
  });

  it('should have intelligence', function() {
    assert.strictEqual(card.intelligence, 6)
  })

  it('should have strength', function() {
    assert.strictEqual(card.strength, 9)
  })

  it('should have agility', function() {
    assert.strictEqual(card.agility, 7)
  })

})
