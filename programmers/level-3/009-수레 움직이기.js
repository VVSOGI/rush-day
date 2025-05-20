/**
 * DFS
 */
function solution(maze) {
  const n = maze.length;
  const m = maze[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let startA, startB;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maze[i][j] === 1) startA = [i, j];
      if (maze[i][j] === 2) startB = [i, j];
    }
  }

  function isInBoard(next) {
    const [nextY, nextX] = next;
    return nextY >= 0 && nextY < n && nextX >= 0 && nextX < m;
  }

  function isOpponentPlace(next, opponent) {
    const [nextY, nextX] = next;
    const [opponentY, opponentX] = opponent;
    if (nextY === opponentY && nextX === opponentX) return true;
    return false;
  }

  function isVisited(visited, next) {
    const [nextY, nextX] = next;
    if (visited.has(`${nextY},${nextX}`)) {
      return true;
    }
    return false;
  }

  function isWall(next) {
    const [nextY, nextX] = next;
    if (maze[nextY][nextX] === 5) return true;
    return false;
  }

  let minimumMove = Infinity;

  function dfs(turn, red, blue) {
    const [currentY, currentX, currentMove, currentEnd, currentVisited] = turn ? red : blue;
    const [opponentY, opponentX, opponentMove, opponentEnd, opponentVisited] = turn ? blue : red;
    const end = turn ? 3 : 4;

    if (maze[currentY][currentX] === end) {
      if (!opponentEnd) {
        dfs(
          !turn,
          turn ? [currentY, currentX, currentMove, true, currentVisited] : red,
          turn ? blue : [currentY, currentX, currentMove, true, currentVisited]
        );
      } else {
        minimumMove = Math.min(minimumMove, Math.max(currentMove, opponentMove));
      }

      return;
    }

    for (const [moveY, moveX] of directions) {
      const nextY = currentY + moveY;
      const nextX = currentX + moveX;
      if (
        isInBoard([nextY, nextX]) &&
        !isOpponentPlace([nextY, nextX], [opponentY, opponentX]) &&
        !isVisited(currentVisited, [nextY, nextX]) &&
        !isWall([nextY, nextX])
      ) {
        currentVisited.add(`${nextY},${nextX}`);
        dfs(
          !turn,
          turn ? [nextY, nextX, currentMove + 1, currentEnd, currentVisited] : red,
          turn ? blue : [nextY, nextX, currentMove + 1, currentEnd, currentVisited]
        );
        currentVisited.delete(`${nextY},${nextX}`);
      }
    }
  }

  dfs(
    true,
    [startA[0], startA[1], 0, false, new Set([startA.join(",")])],
    [startB[0], startB[1], 0, false, new Set([startB.join(",")])]
  );
  dfs(
    false,
    [startA[0], startA[1], 0, false, new Set([startA.join(",")])],
    [startB[0], startB[1], 0, false, new Set([startB.join(",")])]
  );

  return minimumMove === Infinity ? 0 : minimumMove;
}

console.log(
  solution([
    [1, 4],
    [0, 0],
    [2, 3],
  ])
);
