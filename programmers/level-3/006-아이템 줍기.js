/**
 * BFS, 범위 확대
 */

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const graph = Array(101)
    .fill()
    .map(() => Array(101).fill(0));
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const box of rectangle) {
    const [x1, y1, x2, y2] = box.map((item) => item * 2);
    for (let i = y1; i <= y2; i++) {
      for (let j = x1; j <= x2; j++) {
        if (graph[i][j] < 2 && i > y1 && i < y2 && j > x1 && j < x2) {
          graph[i][j] = 2;
        }

        if (!graph[i][j]) {
          graph[i][j] = 1;
        }
      }
    }
  }

  const [startY, startX] = [characterY * 2, characterX * 2];
  const [endY, endX] = [itemY * 2, itemX * 2];
  graph[startY][startX] = 3;

  const queue = [[startY, startX, 0]];

  while (queue.length) {
    const [currentY, currentX, move] = queue.shift();
    if (currentY === endY && currentX === endX) {
      return move / 2;
    }

    for (const [moveY, moveX] of directions) {
      const nextY = currentY + moveY;
      const nextX = currentX + moveX;
      if (nextY >= 0 && nextY < 101 && nextX >= 0 && nextX < 101 && graph[nextY][nextX] === 1) {
        graph[nextY][nextX] = 3;
        queue.push([nextY, nextX, move + 1]);
      }
    }
  }
}

console.log(
  solution(
    [
      [1, 1, 7, 4],
      [3, 2, 5, 5],
      [4, 3, 6, 9],
      [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
  )
);
