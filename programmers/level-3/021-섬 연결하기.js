function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]);

  const parents = Array(n)
    .fill()
    .map((_, index) => index);

  function findParent(node) {
    if (parents[node] !== node) {
      return findParent(parents[node]);
    }
    return parents[node];
  }

  function union(a, b) {
    if (a <= b) {
      parents[b] = a;
    } else {
      parents[a] = b;
    }
  }

  let total = 0;
  let connect = 0;

  for (const [v1, v2, cost] of costs) {
    const a = findParent(v1);
    const b = findParent(v2);

    if (a === b) continue;
    union(a, b);

    connect += 1;
    total += cost;

    if (connect === n - 1) {
      return total;
    }
  }
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
