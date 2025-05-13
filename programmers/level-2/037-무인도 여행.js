function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function findGround(place) {
    const [placeY, placeX] = place;
    const queue = [[placeY, placeX]];
    const points = [Number(maps[placeY][placeX])];

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      for (const [moveY, moveX] of directions) {
        const nextY = currentY + moveY;
        const nextX = currentX + moveX;
        if (
          nextY >= 0 &&
          nextY < n &&
          nextX >= 0 &&
          nextX < m &&
          maps[nextY][nextX] !== "X" &&
          !visited[nextY][nextX]
        ) {
          visited[nextY][nextX] = 1;
          queue.push([nextY, nextX]);
          points.push(Number(maps[nextY][nextX]));
        }
      }
    }

    return points.reduce((a, b) => a + b, 0);
  }

  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "X" || visited[i][j]) continue;
      visited[i][j] = 1;
      result.push(findGround([i, j]));
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"]));
