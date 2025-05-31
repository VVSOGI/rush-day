function solution(A, B) {
  B.sort((a, b) => a - b);

  function findScore(score) {
    let left = 0;
    let right = B.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (B[mid] > score) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  const set = new Set();

  for (const score of A) {
    let index = findScore(score);

    while (set.has(index)) {
      index += 1;
    }

    if (index >= B.length) {
      continue;
    }

    set.add(index);
  }

  return set.size;
}

console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
