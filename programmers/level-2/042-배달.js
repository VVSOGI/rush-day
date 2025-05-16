function solution(N, road, K) {
  const graph = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill(Infinity));

  for (const [v1, v2, cost] of road) {
    graph[v1][v2] = Math.min(graph[v1][v2], cost);
    graph[v2][v1] = Math.min(graph[v2][v1], cost);
  }

  for (let i = 0; i < N + 1; i++) {
    graph[i][i] = 0;
  }

  for (let k = 1; k < N + 1; k++) {
    for (let i = 1; i < N + 1; i++) {
      for (let j = 1; j < N + 1; j++) {
        if (graph[i][k] !== Infinity && graph[k][j] !== Infinity) {
          graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
      }
    }
  }

  let count = 0;

  for (let i = 1; i < graph[1].length; i++) {
    if (graph[1][i] <= K) count += 1;
  }

  return count;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
