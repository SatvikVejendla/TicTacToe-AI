let board = document.querySelector(".board");
let allBox = document.querySelectorAll("section span");
let resultBox = document.querySelector(".result-box");
let replay = resultBox.querySelector("button");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

fetch("http://localhost:8000/newGame");

let XIcon = "fas fa-times";
let OIcon = "far fa-circle";
let playerSign = "X";

let icons = {
  X: XIcon,
  O: OIcon,
  "-": "a",
};

fetch("http://localhost:8000/turn")
  .then((res) => res.json())
  .then((body) => {
    setDetails(body.turn);
    if (body.turn == "ai") {
      botMove();
    }
  });
function clickedBox(element) {
  let num = element.classList[0].split("box")[1];
  fetch(`http://localhost:8000/human?move=${num}`)
    .then((res) => res.json())
    .then((body) => {
      updateUI();
    });

  setTimeout(() => {
    botMove();
  }, Math.random() * 500 + 300);
}

function botMove() {
  fetch(`http://localhost:8000/ai`)
    .then((res) => res.json())
    .then((body) => {
      updateUI();
    });
}
function updateUI(board) {
  fetch("http://localhost:8000/info")
    .then((res) => res.json())
    .then((body) => {
      let b = body.envStats.state;

      for (let i = 0; i < b.length; i++) {
        allBox[i].innerHTML = `<i class="${icons[b[i]]}"></i>`;
      }

      if (body.envStats.is_end) {
        if (body.envStats.is_win) {
          fetch("http://localhost:8000/turn")
            .then((res) => res.json())
            .then((body) => {
              document.querySelector(".board").classList.add("hide");
              resultBox.classList.add("show");

              document.querySelector(".winner").innerText =
                body.turn == "human" ? "Computer Won" : "You Won";
            });
        } else {
          document.querySelector(".board").classList.add("hide");
          resultBox.classList.add("show");

          document.querySelector(".winner").innerText = "Draw";
        }
      }
    });
}

function setDetails(turn) {}
replay.onclick = () => {
  window.location.reload();
};
