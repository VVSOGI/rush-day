/**
 * DP, 백트래킹, 재귀함수
 * 그냥 백트래킹으로 접근하면 비효율적 완전 탐색을 하기에 시간 초과 에러가 남.
 * 이전에 접근했던 경로는 메모이제이션해서 두 번 가지 않게끔 한다.
 */
function solution(info, n, m) {
  let maximum = Infinity;
  const memo = new Set();

  function dfs(index, a, b) {
    if (index === info.length) {
      maximum = Math.min(maximum, a);
      return;
    }

    if (memo.has(`${index}-${a}-${b}`)) {
      return;
    }

    memo.add(`${index}-${a}-${b}`);

    if (m > b + info[index][1]) {
      dfs(index + 1, a, b + info[index][1]);
    }

    if (n > a + info[index][0]) {
      dfs(index + 1, a + info[index][0], b);
    }
  }

  dfs(0, 0, 0);

  return maximum === Infinity ? -1 : maximum;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
      [2, 1],
    ],
    4,
    4
  )
);
