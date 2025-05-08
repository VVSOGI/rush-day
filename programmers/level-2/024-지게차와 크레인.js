/**
 * 인접 행렬 그래프, BFS
 */
function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  const map = Array(n)
    .fill()
    .map(() => Array(m).fill(1));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let count = 0;

  function removeAll(request) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (storage[i][j] === request && map[i][j]) {
          map[i][j] = 0;
          count += 1;
        }
      }
    }
  }

  function isPossibleRemove(current) {
    const visited = new Set();
    const queue = [current];
    visited.add(`${current[0]},${current[1]}`);

    while (queue.length) {
      const [currentY, currentX] = queue.shift();
      for (const [moveY, moveX] of directions) {
        const nextY = currentY + moveY;
        const nextX = currentX + moveX;

        if (nextY < 0 || nextY >= n || nextX < 0 || nextX >= m) {
          return true;
        }

        if (!map[nextY][nextX] && !visited.has(`${nextY},${nextX}`)) {
          queue.push([nextY, nextX]);
          visited.add(`${nextY},${nextX}`);
        }
      }
    }

    return false;
  }

  function removePossible(request) {
    const possibles = [];

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (storage[i][j] !== request || !map[i][j]) continue;

        if (isPossibleRemove([i, j])) {
          possibles.push([i, j]);
        }
      }
    }

    for (const [possibleY, possibleX] of possibles) {
      map[possibleY][possibleX] = 0;
      count += 1;
    }
  }

  for (const request of requests) {
    if (request.length > 1) {
      removeAll(request[0]);
    } else {
      removePossible(request);
    }
  }

  return n * m - count;
}

console.log(solution(["AZWQY", "CAABX", "BBDDA", "ACACA"], ["A", "BB", "A"]));
