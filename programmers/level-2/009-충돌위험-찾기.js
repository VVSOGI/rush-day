/**
 * BFS
 * 인접 행렬 그래프와 BFS를 이용해 라운드당 한 번씩 겹치는 노드를 확인한다.
 * 나머지는 구현
 */

function solution(points, routes) {
  const max = Math.max(...points.map((point) => Math.max(...point)));
  const map = Array(max)
    .fill()
    .map(() =>
      Array(max)
        .fill()
        .map(() => new Set())
    );

  const starts = points.map(([y, x]) => [y - 1, x - 1]);
  const places = {};

  for (let i = 0; i < starts.length; i++) {
    const [startY, startX] = starts[i];
    places[i + 1] = [startY, startX];
  }

  const queue = [];

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const start = route.shift();
    const next = route.shift();

    const [currentY, currentX] = places[start];
    map[currentY][currentX].add(i + 1);

    queue.push([i + 1, places[start], places[next], route, 0]);
  }

  let currentRound = 0;
  let count = 0;

  while (queue.length) {
    let [node, [currentY, currentX], [nextY, nextX], rest, round] = queue.shift();

    if (currentRound === round) {
      for (let i = 0; i < max; i++) {
        for (let j = 0; j < max; j++) {
          if (map[i][j].size > 1) {
            count++;
          }
        }
      }
      currentRound += 1;
    }

    if (currentY === nextY && currentX === nextX) {
      if (rest.length) {
        const nextTarget = rest.shift();
        const [targetY, targetX] = places[nextTarget];
        nextY = targetY;
        nextX = targetX;
      } else {
        map[currentY][currentX].delete(node);
        continue;
      }
    }

    map[currentY][currentX].delete(node);

    if (nextY > currentY) {
      map[currentY + 1][currentX].add(node);
      queue.push([node, [currentY + 1, currentX], [nextY, nextX], rest, round + 1]);
      continue;
    }

    if (nextY < currentY) {
      map[currentY - 1][currentX].add(node);
      queue.push([node, [currentY - 1, currentX], [nextY, nextX], rest, round + 1]);
      continue;
    }

    if (nextX > currentX) {
      map[currentY][currentX + 1].add(node);
      queue.push([node, [currentY, currentX + 1], [nextY, nextX], rest, round + 1]);
      continue;
    }

    if (nextX < currentX) {
      map[currentY][currentX - 1].add(node);
      queue.push([node, [currentY, currentX - 1], [nextY, nextX], rest, round + 1]);
      continue;
    }
  }

  return count;
}

console.log(
  solution(
    [
      [3, 2],
      [6, 4],
      [4, 7],
      [1, 4],
    ],
    [
      [4, 2],
      [1, 3],
      [4, 2],
      [4, 3],
    ]
  )
);
