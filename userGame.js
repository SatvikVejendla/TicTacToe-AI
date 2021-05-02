const QLearning = require("./agents/qlearning.js");
const TicTacToe = require("./game/TicTacToe.js");
const Human = require("./agents/human.js");
const getState = require("./model/getState.js");

let brain = getState();
let ai = new QLearning(brain);
let human = new Human();
class UserGame {
  constructor() {
    let _env = new TicTacToe(ai, human);
    this.envStats = _env.reset(ai, human);
    this.env = _env;
  }

  play(move) {
    let env = this.env;
    let envStats = this.envStats;

    let action;
    if (move) {
      action = parseInt(move) - 1;
    } else {
      let players = env.player_turn();
      action = players.cur.action(envStats.state, env.action_space);
    }

    if (env.action_space.indexOf(action) != -1) {
      this.envStats = env.step(action);
      env.toggle_player();
      return {
        status: 200,
      };
    } else {
      return {
        status: 400,
      };
    }
  }
  current_player() {
    return this.env.player_turn().cur instanceof QLearning ? "ai" : "human";
  }
}

module.exports = UserGame;
