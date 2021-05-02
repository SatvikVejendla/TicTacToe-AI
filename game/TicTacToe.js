class TicTacToe {
  constructor(p1, p2) {
    this.reset(p1, p2);
  }

  step(action) {
    this.state[action] = this.cur_player;
    this.action_space.remove(action);

    this.check_end();
    if (this.is_end) {
      if (this.is_win) {
        this.info = `${this.cur_player} won`;
      } else {
        this.info = "players draw";
      }
    } else {
      this.info = `${this.cur_player} won`;
    }
    return {
      state: this.state,
      is_win: this.is_win,
      is_end: this.is_end,
      info: this.is_info,
    };
  }

  print() {
    let arr = this.state;
    for (let i = 0; i < 9; i += 3) {
      console.log(arr[i], " ", arr[i + 1], " ", arr[i + 2]);
    }
  }

  reset(X, O) {
    this.state = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    this.action_space = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.is_end = false;
    this.is_win = false;
    this.info = "new game";
    this.playerX = X;
    this.playerO = O;
    this.cur_player = ["O", "X"][Math.floor(Math.random() * 2)];
    return {
      state: this.state,
      is_win: this.is_win,
      is_end: this.is_end,
      info: this.info,
    };
  }

  player_turn() {
    let cur, oth;

    if (this.cur_player == "O") {
      cur = this.playerO;
      oth = this.playerX;
    } else {
      cur = this.playerX;
      oth = this.playerO;
    }

    this.info = `player ${this.cur_player} turn`;

    return {
      cur: cur,
      oth: oth,
    };
  }
  toggle_player() {
    this.cur_player = "OX".replace(this.cur_player, "");
  }

  check_end() {
    let board = this.state;
    if (
      board[0] == board[1] &&
      board[1] == board[2] &&
      board[2] == board[0] &&
      board[0] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[0];
    }
    if (
      board[3] == board[4] &&
      board[4] == board[5] &&
      board[5] == board[3] &&
      board[3] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[3];
    }
    if (
      board[6] == board[7] &&
      board[7] == board[8] &&
      board[8] == board[6] &&
      board[6] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[6];
    }

    if (
      board[0] == board[3] &&
      board[3] == board[6] &&
      board[6] == board[0] &&
      board[0] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[0];
    }
    if (
      board[1] == board[4] &&
      board[4] == board[7] &&
      board[7] == board[1] &&
      board[1] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[1];
    }
    if (
      board[2] == board[5] &&
      board[5] == board[8] &&
      board[8] == board[2] &&
      board[2] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[2];
    }

    if (
      board[0] == board[4] &&
      board[4] == board[8] &&
      board[8] == board[0] &&
      board[0] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[0];
    }
    if (
      board[2] == board[4] &&
      board[4] == board[6] &&
      board[6] == board[2] &&
      board[2] != "-"
    ) {
      this.is_win = true;
      this.is_end = true;
      return board[2];
    }
    if (this.action_space.length == 0) {
      this.is_win = false;
      this.is_end = true;
      return "None";
    }

    return 0;
  }
}
module.exports = TicTacToe;
