const prompt = require("prompt-sync")();

class Human {
  constructor() {}

  action(state, actions) {
    let a = parseInt(prompt("Your turn:")) - 1;
    return a;
  }
}

module.exports = Human;
