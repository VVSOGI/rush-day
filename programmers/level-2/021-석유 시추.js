/**
 * 인접 행렬 그래프, BFS
 */

function solution(land) {
  const n = land.length;
  const m = land[0].length;
  const visited = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const places = Array(m).fill(0);

  function findGas(current) {
    const queue = [current];
    const findPlaces = new Set();
    findPlaces.add(current[1]);
    let count = 1;

    while (queue.length) {
      const [currentY, currentX] = queue.shift();

      for (const [moveY, moveX] of directions) {
        const nextY = currentY + moveY;
        const nextX = currentX + moveX;

        if (nextY >= 0 && nextY < n && nextX >= 0 && nextX < m && !visited[nextY][nextX] && land[nextY][nextX]) {
          count += 1;
          findPlaces.add(nextX);
          visited[nextY][nextX] = 1;
          queue.push([nextY, nextX]);
        }
      }
    }

    for (const place of findPlaces) {
      places[place] += count;
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[j][i] && visited[j][i] === 0) {
        visited[j][i] = 1;
        findGas([j, i]);
      }
    }
  }

  return Math.max(...places);
}

console.log(
  solution([
    [0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
  ])
);
