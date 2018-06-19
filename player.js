const Player = function(name) {
  this.name = name;
  this.hand = [];
}

Player.prototype.takeCard = function(card) {
  this.hand.push(card);
}


module.exports = Player;
