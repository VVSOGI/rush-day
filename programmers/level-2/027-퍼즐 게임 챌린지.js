/**
 * 이분탐색
 */

function solution(diffs, times, limit) {
  let left = 1;
  let right = 10e14;

  function isPossible(level) {
    let total = 0;
    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const currentTime = times[i];
      const prevTime = times[i - 1] || 0;

      if (diff <= level) {
        total += currentTime;
      } else {
        total += (diff - level) * (prevTime + currentTime) + currentTime;
      }
    }

    return total <= limit;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(solution([1, 4, 4, 2], [6, 3, 8, 2], 59));
