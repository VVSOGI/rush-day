function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let entry = -30001;
  let count = 0;

  for (const [start, end] of routes) {
    if (start > entry) {
      entry = end;
      count += 1;
    }
  }

  return count;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);
