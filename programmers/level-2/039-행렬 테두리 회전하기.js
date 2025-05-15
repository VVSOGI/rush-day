function solution(rows, columns, queries) {
  const matrix = Array(rows)
    .fill()
    .map(() => Array(columns).fill());

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  const result = [];

  for (const [x1, y1, x2, y2] of queries) {
    const coords = [];
    let min = Infinity;

    for (let j = y1 - 1; j < y2 - 1; j++) {
      coords.push([x1 - 1, j]);
      min = Math.min(min, matrix[x1 - 1][j]);
    }

    for (let i = x1 - 1; i < x2 - 1; i++) {
      coords.push([i, y2 - 1]);
      min = Math.min(min, matrix[i][y2 - 1]);
    }

    for (let j = y2 - 1; j > y1 - 1; j--) {
      coords.push([x2 - 1, j]);
      min = Math.min(min, matrix[x2 - 1][j]);
    }

    for (let i = x2 - 1; i > x1 - 1; i--) {
      coords.push([i, y1 - 1]);
      min = Math.min(min, matrix[i][y1 - 1]);
    }

    const lastValue = matrix[coords[coords.length - 1][0]][coords[coords.length - 1][1]];

    for (let i = coords.length - 1; i > 0; i--) {
      const [currentX, currentY] = coords[i];
      const [prevX, prevY] = coords[i - 1];
      matrix[currentX][currentY] = matrix[prevX][prevY];
    }

    matrix[coords[0][0]][coords[0][1]] = lastValue;

    result.push(min);
  }

  return result;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
