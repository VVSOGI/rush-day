function solution(n, edges) {
  const graph = Array(n + 1)
    .fill()
    .map(() => []);

  for (const [v1, v2] of edges) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const distances = Array(n + 1).fill(Infinity);
  distances[0] = 0;
  distances[1] = 0;

  const queue = [[1, 0]];
  while (queue.length) {
    const [node, move] = queue.shift();

    for (let i = 0; i < graph[node].length; i++) {
      const next = graph[node][i];
      if (distances[next] === Infinity) {
        distances[next] = move + 1;
        queue.push([next, move + 1]);
      }
    }
  }

  const max = Math.max(...distances);
  return distances.filter((distance) => distance === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
