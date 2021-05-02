const ternary = require("../helper/ternary.js");
require("../helper/maxIndex.js");

class QLearning {
  constructor(brain) {
    this.brain = brain;

    this.l_state = "000000000";
  }

  action(current_state, actions) {
    this.l_state = ternary(current_state.join(""));

    let row;
    let action;

    if (this.brain[this.l_state]) {
      row = this.brain[this.l_state];
      let tmp = [];
      for (let i = 0; i < actions.length; i++) {
        tmp[i] = row[actions[i]];
      }

      let ind = tmp.indexOf(Math.max(...tmp));
      action = actions[ind];
    } else {
      action = actions[Math.floor(Math.random() * actions.length)];
    }

    this.l_action = action;

    return action;
  }
}

module.exports = QLearning;
