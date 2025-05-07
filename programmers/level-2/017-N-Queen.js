/**
 * DFS 백트래킹
 * 이전에 갔던 경로를 지우며 모든 경로를 탐색한다.
 */

function solution(n) {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  const directions = [
    [-1, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ];

  let count = 0;

  function isPossible(currentY, currentX) {
    if (board[currentY][currentX]) return false;

    for (let i = 0; i < n; i++) {
      if (board[currentY][i]) return false;
      if (board[i][currentX]) return false;
    }

    for (const [moveY, moveX] of directions) {
      let nextY = currentY + moveY;
      let nextX = currentX + moveX;
      while (nextY >= 0 && nextY < n && nextX >= 0 && nextX < n) {
        if (board[nextY][nextX]) return false;
        nextY += moveY;
        nextX += moveX;
      }
    }

    return true;
  }

  function dfs(index) {
    if (index === n) {
      count += 1;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isPossible(index, i)) {
        board[index][i] = 1;
        dfs(index + 1);
        board[index][i] = 0;
      }
    }
  }

  dfs(0);

  return count;
}

console.log(solution(4));
