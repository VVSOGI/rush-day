function solution(k, ranges) {
  const computedY = [];

  function collatzCompute(n) {
    computedY.push(n);
    if (n === 1) return;
    collatzCompute(n % 2 === 0 ? n / 2 : n * 3 + 1);
  }

  collatzCompute(k);

  const areas = [];
  const result = [];
  const rangesFixed = ranges.map(([a, b]) => [a, computedY.length + b - 1]);

  for (let x = 0; x < computedY.length - 1; x++) {
    const y = computedY[x];
    const nextY = computedY[x + 1];
    areas.push((y + nextY) / 2);
  }

  for (const [a, b] of rangesFixed) {
    if (a > b) {
      result.push(-1);
      continue;
    }

    result.push(areas.slice(a, b).reduce((a, b) => a + b, 0));
  }

  return result;
}

console.log(
  solution(5, [
    [0, 0],
    [0, -1],
    [2, -3],
    [3, -3],
  ])
);
