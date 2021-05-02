const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const UserGame = require("./userGame.js");
const serverConfig = require("./config/server.js");
require("./helper/remove.js");

//userGame(brain);

let app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("public"));

let game;

app.get("/newGame", (req, res) => {
  try {
    game = new UserGame();
    res.send({ status: 200 });
  } catch (e) {
    res.send({ status: 500 });
  }
});

app.get("/info", (req, res) => {
  let info = {
    status: 200,
    envStats: game.envStats,
    action_space: game.env.action_space,
  };
  res.send(info);
});

app.get("/human", (req, res) => {
  let move = req.query.move;
  if (game.current_player() == "human") {
    game.play(move);
    res.send({ status: 200 });
  } else {
    res.send({ status: 400, error: "Wrong turn" });
  }
});

app.get("/turn", (req, res) => {
  res.send({ turn: game.current_player() });
});

app.get("/ai", (req, res) => {
  if (game.current_player() == "ai") {
    game.play();
    res.send({ hi: 2 });
  } else {
    res.send({ status: 400, error: "Wrong turn" });
  }
});
let listener = app.listen(serverConfig.port || 8000, () => {
  console.log("Running on " + listener.address().port);
});
