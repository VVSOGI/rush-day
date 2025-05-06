/**
 * 두 직선의 교점 찾기 공식 + 배열 자료구조에 맞는 좌표 이동
 */
function solution(line) {
  const coordinates = [];

  for (let i = 0; i < line.length; i++) {
    const [x1, y1, c1] = line[i];
    for (let j = i + 1; j < line.length; j++) {
      const [x2, y2, c2] = line[j];

      const denominator = x1 * y2 - x2 * y1;
      if (denominator === 0) continue;

      const x = (y1 * c2 - y2 * c1) / denominator;
      const y = (x2 * c1 - x1 * c2) / denominator;

      if (Number.isInteger(x) && Number.isInteger(y)) {
        coordinates.push([y, x]);
      }
    }
  }

  let maxY = -Infinity;
  let maxX = -Infinity;
  let minX = Infinity;
  let minY = Infinity;

  for (const [cy, cx] of coordinates) {
    maxY = Math.max(maxY, cy);
    maxX = Math.max(maxX, cx);
    minY = Math.min(minY, cy);
    minX = Math.min(minX, cx);
  }

  const graph = Array(maxY - minY + 1)
    .fill()
    .map(() => Array(maxX - minX + 1).fill("."));

  for (const [cy, cx] of coordinates) {
    const nextY = maxY - cy;
    const nextX = cx - minX;
    graph[nextY][nextX] = "*";
  }

  return graph.map((item) => item.join(""));
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ])
);
