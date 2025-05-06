/**
 * 범위 지정 재귀함수
 */
function solution(n, l, r) {
  return getCantor(n, l - 1, r - 1, 0);
}

function getCantor(n, l, r, offset) {
  const find = Math.pow(5, n - 1);
  let count = 0;

  for (let i = 0; i < 5; i++) {
    let start = i * find + offset;
    let end = start + find - 1;

    if (start > r || end < l) continue;
    if (i === 2) continue;

    if (start >= l && end <= r) {
      count += Math.pow(4, n - 1);
    } else {
      count += getCantor(n - 1, l, r, start);
    }
  }
  //   11011
  //   11011
  //   00000
  //   11011
  //   11011

  // 1101111011000001101111011 -> 16
  // 1101111011000001101111011 -> 16
  // 0000000000000000000000000
  // 1101111011000001101111011 -> 16
  // 1101111011000001101111011 -> 16

  return count;
}

console.log(solution(3, 26, 28));
