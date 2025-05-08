/**
 * 그리디
 */
function solution(targets) {
  targets.sort((a, b) => a[1] - b[1]);

  let start = -1;
  let count = 0;
  for (const [s, e] of targets) {
    if (start < s) {
      start = e - 0.1;
      count += 1;
    }
  }

  return count;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
