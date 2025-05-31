function solution(n, computers) {
  const graph = Array(n - 1).fill(0);
  let total = 0;

  function findConnect(index, computer) {
    if (!graph[index]) {
      graph[index] = 1;
      total += 1;
    }

    for (let i = 0; i < computer.length; i++) {
      if (index === i) continue;

      if (!graph[i] && computer[i]) {
        graph[i] = 1;
        findConnect(i, computers[i]);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    findConnect(i, computers[i]);
  }

  return total;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
