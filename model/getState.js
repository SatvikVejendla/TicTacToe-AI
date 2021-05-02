const fs = require("fs");
const path = require("path");

function getState() {
  let brain = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./state/brain.json")).toString()
  ).brain;

  return brain;
}

module.exports = getState;
