function solution(n, times) {
  let left = 1;
  let right = 10e17;

  function isPossible(time) {
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count += Math.floor(time / times[i]);
    }

    return count >= n;
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

console.log(solution(6, [7, 10]));
