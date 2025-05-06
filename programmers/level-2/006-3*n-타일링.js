/**
 * DP
 * 작은 문제의 해답으로 큰 문제를 도출한다.
 * 이전 값들을 메모이제이션한다.
 * 가로가 2일 때 3개가 가능하다.
 * 가로가 4일 때 이전 모양 하나당 * 3 + 공유 블록 갯수 2개를 추가. -> 11개
 * 가로가 6일 때 4일 때의 모양 하나당 * 3 + 공유 블록 갯수 2개 추가 + 2일 때 블록 경우의 수
 */
function solution(n) {
  const remainder = 10e8 + 7;
  if (n % 2 === 1) return 0;

  const result = Array(n + 1).fill(0);
  result[2] = 3;
  result[4] = 11;

  for (let i = 6; i <= n; i += 2) {
    let before = i - 2;
    let sum = result[before] * 3 + 2;
    while (before !== 0) {
      before -= 2;
      sum += result[before] * 2;
    }
    result[i] = sum % remainder;
  }

  return result[n];
}

console.log(solution(6));
