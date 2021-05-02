const QLearning = require("./agents/qlearning.js");
const TicTacToe = require("./game/TicTacToe.js");
const Human = require("./agents/human.js");
const getState = require("./model/getState.js");

require("./helper/remove.js");
let brain = getState();
function userGame(brain) {
  let ai = new QLearning(brain);
  let human = new Human();
  let env = new TicTacToe(ai, human);

  let envStats = env.reset(ai, human);

  while (true) {
    console.log("=========");
    env.print();
    let players = env.player_turn();

    let action = players.cur.action(envStats.state, env.action_space);

    while (env.action_space.indexOf(action) == -1) {
      console.log("Please choose a valid move.");
      action = players.cur.action(envStats.state, env.action_space);
    }
    envStats = env.step(action);
    env.toggle_player();
    if (envStats.is_end) {
      console.clear();
      console.log("=========");
      env.print();
      console.log(
        env.check_end() != "None" ? "Winner: " + env.check_end() : "Draw"
      );
      break;
    }
  }
}
userGame(brain);
