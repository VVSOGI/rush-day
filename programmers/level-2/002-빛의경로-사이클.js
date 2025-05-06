function solution(grid) {
  const n = grid.length;
  const m = grid[0].length;
  const graph = Array(n)
    .fill()
    .map(() =>
      Array(m)
        .fill()
        .map(() => Array(4).fill(false))
    );
  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  function findRoute(current, direction) {
    let [currentY, currentX] = current;
    let currentDirection = direction;
    let count = 0;

    while (!graph[currentY][currentX][currentDirection]) {
      count += 1;
      graph[currentY][currentX][currentDirection] = true;
      const [moveY, moveX] = directions[currentDirection];
      const [nextY, nextX] = [(currentY + moveY + n) % n, (currentX + moveX + m) % m];

      if (grid[nextY][nextX] === "L") {
        currentDirection = (currentDirection + 3) % 4;
      } else if (grid[nextY][nextX] === "R") {
        currentDirection = (currentDirection + 1) % 4;
      }

      currentY = nextY;
      currentX = nextX;
    }

    return count;
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < 4; k++) {
        if (!graph[i][j][k]) {
          result.push(findRoute([i, j], k));
        }
      }
    }
  }

  result.sort((a, b) => a - b);
  return result;
}

console.log(solution(["SL", "LR"]));
