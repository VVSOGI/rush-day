/**
 * x값에 따른 원의 y값 y1, y2 사이의 점들의 갯수
 * x가 작은 원보다 크거나 같으면 y1의 값은 항상 0
 */

function solution(r1, r2) {
  let count = 0;
  for (let x = 1; x <= r2; x++) {
    const y1 = x < r1 ? Math.ceil(Math.sqrt(r1 * r1 - x * x)) : 0;
    const y2 = Math.floor(Math.sqrt(r2 * r2 - x * x));
    count += y2 - y1 + 1;
  }

  return count * 4;
}

console.log(solution(2, 3));
