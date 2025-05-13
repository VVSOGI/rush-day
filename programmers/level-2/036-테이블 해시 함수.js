function solution(data, col, row_begin, row_end) {
  const sorted = data.sort((a, b) => {
    if (a[col - 1] !== b[col - 1]) {
      return a[col - 1] - b[col - 1];
    }
    return b[0] - a[0];
  });

  let total = 0;

  for (let i = row_begin - 1; i < row_end; i++) {
    let count = 0;
    for (let j = 0; j < sorted[i].length; j++) {
      count += sorted[i][j] % (i + 1);
    }
    total += count;
  }

  return total;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3
  )
);
