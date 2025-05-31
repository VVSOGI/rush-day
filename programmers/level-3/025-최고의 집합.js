function solution(n, s) {
  const arr = Array(n).fill(Math.floor(s / n));
  let count = s % n;

  if (arr.reduce((a, b) => a + b, 0) === 0) {
    return [-1];
  }

  while (count) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (count === 0) {
        return arr;
      } else {
        arr[i] += 1;
        count -= 1;
      }
    }
  }

  return arr;
}

console.log(solution(5, 17));
