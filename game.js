const Card = require('./card')

const Game = function() {
    this.cards = [
      {name: 'Superman',
      intelligence: 6,
      strength: 9,
      agility: 7},

      {name: 'Scarlet Witch',
      intelligence: 7,
      strength: 10,
      agility: 5},

      {name: 'Black Widow',
      intelligence: 8,
      strength: 6,
      agility: 9},

      {name: 'The Flash',
      intelligence: 7,
      strength: 4,
      agility: 10},

      {name: 'Wonder Woman',
      intelligence: 8,
      strength: 7,
      agility: 5},

      {name: 'Batman',
      intelligence: 10,
      strength: 5,
      agility: 6}
    ]
}

Game.prototype.topCard = function () {
  return new Card(this.cards.shift());
};

module.exports = Game;
