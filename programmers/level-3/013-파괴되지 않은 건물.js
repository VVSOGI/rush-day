/**
 * 누적합
 */
function solution(board, skill) {
  const n = board.length;
  const m = board[0].length;
  const map = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  for (const [type, startY, startX, endY, endX, cost] of skill) {
    const impact = type === 1 ? -cost : cost;
    map[startY][startX] += impact;
    map[startY][endX + 1] -= impact;
    map[endY + 1][startX] -= impact;
    map[endY + 1][endX + 1] += impact;
  }

  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      map[i][j] += map[i][j - 1];
    }
  }

  for (let j = 0; j <= m; j++) {
    for (let i = 1; i <= n; i++) {
      map[i][j] += map[i - 1][j];
    }
  }

  return board
    .map(
      (row, rowIndex) =>
        row
          .map((col, colIndex) => col + map[rowIndex][colIndex]) //
          .filter((col) => col > 0).length
    )
    .reduce((a, b) => a + b, 0);
}

console.log(
  solution(
    [
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
      [5, 5, 5, 5, 5],
    ],
    [
      [1, 0, 0, 3, 4, 4],
      [1, 2, 0, 2, 3, 2],
      [2, 1, 0, 3, 1, 2],
      [1, 0, 1, 3, 3, 1],
    ]
  )
);
