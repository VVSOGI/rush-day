function solution(board, aloc, bloc) {
  const n = board.length;
  const m = board[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function isInBoard(currentY, currentX) {
    return currentY >= 0 && currentY < n && currentX >= 0 && currentX < m;
  }

  function isPossibleMove(currentY, currentX) {
    return directions.some(([moveY, moveX]) => {
      const nextY = currentY + moveY;
      const nextX = currentX + moveX;
      return isInBoard(nextY, nextX) && board[nextY][nextX];
    });
  }

  function dfs(turn, aloc, bloc) {
    const [currentY, currentX] = turn ? aloc : bloc;
    const wincase = [];
    const losecase = [];

    if (!board[currentY][currentX]) return [false, 0];
    if (!isPossibleMove(currentY, currentX)) return [false, 0];

    board[currentY][currentX] = 0;
    for (const [moveY, moveX] of directions) {
      const nextY = currentY + moveY;
      const nextX = currentX + moveX;
      if (isInBoard(nextY, nextX) && board[nextY][nextX]) {
        const [opponentResult, count] = dfs(!turn, turn ? [nextY, nextX] : aloc, turn ? bloc : [nextY, nextX]);
        if (opponentResult) {
          losecase.push(count + 1);
        } else {
          wincase.push(count + 1);
        }
      }
    }
    board[currentY][currentX] = 1;

    if (wincase.length) return [true, Math.min(...wincase)];
    if (losecase.length) return [false, Math.max(...losecase)];
    return [false, 0];
  }

  const [_, count] = dfs(true, aloc, bloc);

  return count;
}

console.log(
  solution(
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [1, 0],
    [1, 2]
  )
);
