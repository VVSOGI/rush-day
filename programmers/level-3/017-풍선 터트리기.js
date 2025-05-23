function solution(a) {
  if (a.length <= 2) {
    return a.length;
  }

  let leftMinimum = Infinity;
  let minimumIndex = 0;
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < leftMinimum) {
      leftMinimum = a[i];
      minimumIndex = i;
      count += 1;
    }
  }

  let rightMinimum = Infinity;
  for (let i = a.length - 1; i > minimumIndex; i--) {
    if (a[i] < rightMinimum) {
      rightMinimum = a[i];
      count += 1;
    }
  }

  return count;
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));
