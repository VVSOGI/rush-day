function solution(board) {
  const n = board.length;
  const m = board[0].length;
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let start;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") start = [i, j, 0];
    }
  }

  visited[start[0]][start[1]] = 1;

  const queue = [start];
  while (queue.length) {
    const [currentY, currentX, move] = queue.shift();
    if (board[currentY][currentX] === "G") {
      return move;
    }

    for (const [moveY, moveX] of directions) {
      let nextY = currentY + moveY;
      let nextX = currentX + moveX;
      while (nextY >= 0 && nextY < n && nextX >= 0 && nextX < m) {
        if (board[nextY][nextX] === "D") {
          if (!visited[nextY - moveY][nextX - moveX]) {
            queue.push([nextY - moveY, nextX - moveX, move + 1]);
            visited[nextY - moveY][nextX - moveX] = 1;
          }
          break;
        }
        nextY += moveY;
        nextX += moveX;
      }

      if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= m) {
        if (!visited[nextY - moveY][nextX - moveX]) continue;
        queue.push([nextY - moveY, nextX - moveX, move + 1]);
        visited[nextY - moveY][nextX - moveX] = 1;
      }
    }
  }

  return -1;
}

console.log(solution(["...D..R", ".D.G...", "....D.D", "D....D.", "..D...."]));
