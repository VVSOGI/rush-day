function solution(board) {
  const n = board.length;
  const m = board[0].length;
  let max = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < m - 1; j++) {
      if (board[i][j] && board[i + 1][j] && board[i][j + 1] && board[i + 1][j + 1]) {
        board[i + 1][j + 1] = board[i + 1][j + 1] + Math.min(board[i][j], board[i + 1][j], board[i][j + 1]);
        max = Math.max(board[i + 1][j + 1], max);
      }
    }
  }

  if (max === 0) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j]) return 1;
      }
    }
  }

  return max * max;
}

console.log(solution([[0], [0], [0], [0]]));
