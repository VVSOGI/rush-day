/**
 * 플로이드 워셜
 */
function solution(n, results) {
  const graph = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (const [v1, v2] of results) {
    graph[v1][v2] = 1;
    graph[v2][v1] = -1;
  }

  for (let k = 1; k < n + 1; k++) {
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < n + 1; j++) {
        if (graph[i][k] > 0 && graph[k][j] > 0) {
          graph[i][j] = 1;
          graph[j][i] = -1;
        }
      }
    }
  }

  return graph.map((board) => board.filter((score) => score !== 0).length).filter((score) => score === n - 1).length;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
