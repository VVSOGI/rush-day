function solution(board) {
  function isSuccess(turn) {
    for (let y = 0; y < 3; y++) {
      let count = 0;
      for (let x = 0; x < 3; x++) {
        if (board[y][x] === turn) count += 1;
      }

      if (count === 3) return true;
    }

    for (let x = 0; x < 3; x++) {
      let count = 0;
      for (let y = 0; y < 3; y++) {
        if (board[y][x] === turn) count += 1;
      }

      if (count === 3) return true;
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < 3; i++) {
      if (board[i][i] === turn) left += 1;
      if (board[i][2 - i] === turn) right += 1;
      if (left === 3 || right === 3) return true;
    }

    return false;
  }

  let checkO = 0;
  let checkX = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "O") checkO += 1;
      if (board[i][j] === "X") checkX += 1;
    }
  }

  if (checkO !== checkX && checkO !== checkX + 1) return 0;
  if (isSuccess("O") && isSuccess("X")) return 0;
  if (isSuccess("O") && checkO !== checkX + 1) return 0;
  if (isSuccess("X") && checkO !== checkX) return 0;

  return 1;
}

console.log(solution(["O.X", ".O.", "..X"]));
