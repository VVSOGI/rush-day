/**
 * 재귀 함수
 */
function solution(n) {
  const result = [];

  function hanoi(n, left, center, right) {
    if (n === 1) {
      result.push([left, right]);
      return;
    }

    hanoi(n - 1, left, right, center);
    result.push([left, right]);
    hanoi(n - 1, center, left, right);
  }

  hanoi(n, 1, 2, 3);

  return result;
}

console.log(solution(4));
