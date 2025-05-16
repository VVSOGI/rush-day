function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let start, end, lever;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") start = [i, j, 0];
      if (maps[i][j] === "E") end = [i, j];
      if (maps[i][j] === "L") lever = [i, j];
    }
  }

  function findWay(start, target) {
    const queue = [start];
    const [targetY, targetX] = target;
    const visited = Array(n)
      .fill()
      .map(() => Array(m).fill(0));

    while (queue.length) {
      const [currentY, currentX, move] = queue.shift();

      if (currentY === targetY && targetX === currentX) {
        return [currentY, currentX, move];
      }

      for (const [moveY, moveX] of directions) {
        const nextY = currentY + moveY;
        const nextX = currentX + moveX;
        if (
          nextY >= 0 &&
          nextY < n &&
          nextX >= 0 &&
          nextX < m &&
          !visited[nextY][nextX] &&
          maps[nextY][nextX] !== "X"
        ) {
          visited[nextY][nextX] = 1;
          queue.push([nextY, nextX, move + 1]);
        }
      }
    }

    return [-1, -1, -1];
  }

  const startToLever = findWay(start, lever);
  if (startToLever[2] === -1) return -1;

  return findWay(startToLever, end)[2];
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
