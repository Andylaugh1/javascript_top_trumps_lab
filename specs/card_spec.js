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

  


})
