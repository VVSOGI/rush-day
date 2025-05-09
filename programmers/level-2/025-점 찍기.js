/**
 * 이분탐색
 * 해당 y에서 가능한 x값 구하기
 */

function solution(k, d) {
  let result = 0;

  for (let i = 0; i <= d; i += k) {
    let left = 0;
    let right = d;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (mid * mid + i * i > d * d) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    result += Math.ceil(left / k);
  }

  return result;
}

console.log(solution(1, 5));
