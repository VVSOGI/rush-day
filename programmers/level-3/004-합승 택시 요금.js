function solution(n, s, a, b, fares) {
  const graph = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(Infinity));

  for (const [start, end, cost] of fares) {
    graph[start][end] = cost;
    graph[end][start] = cost;
  }

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] && graph[k][j]) {
          graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
      }
    }
  }

  let minimumCost = Infinity;

  for (let i = 1; i <= n; i++) {
    minimumCost = Math.min(minimumCost, graph[s][i] + graph[i][a] + graph[i][b]);
  }

  return minimumCost;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
);
