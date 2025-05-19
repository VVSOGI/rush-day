/**
 * 에라스토테네스의 체
 */

function solution(e, starts) {
  const divisors = Array(e + 1).fill(0);

  for (let i = 1; i <= e; i++) {
    for (let j = i; j <= e; j += i) {
      divisors[j] += 1;
    }
  }

  const maxRanges = Array(e + 1).fill(0);
  let maxScore = 0;
  let maxIndex = 0;

  for (let i = maxRanges.length - 1; i > 0; i--) {
    if (divisors[i] >= maxScore) {
      maxScore = divisors[i];
      maxIndex = i;
    }
    maxRanges[i] = maxIndex;
  }

  return starts.map((start) => maxRanges[start]);
}

console.log(solution(8, [1, 3, 7]));
