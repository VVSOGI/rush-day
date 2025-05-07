/**
 * combination
 * 숫자 조합을 만든 후 모든 쿼리의 조건과 일치하면 result 카운트를 올린다.
 */

function solution(n, q, ans) {
  function getCombinations(arr, count) {
    if (count === 1) {
      return arr.map((item) => [item]);
    }

    const result = [];
    arr.forEach((item, index, array) => {
      const combinations = getCombinations(array.slice(index + 1), count - 1);
      const attached = combinations.map((combination) => [item, ...combination]);
      result.push(...attached);
    });

    return result;
  }

  const cases = Array(n)
    .fill()
    .map((_, index) => index + 1);

  const combinations = getCombinations(cases, 5);
  let result = 0;

  for (const combination of combinations) {
    let isPossible = true;
    for (let i = 0; i < q.length; i++) {
      let include = 0;
      for (let j = 0; j < q[i].length; j++) {
        if (combination.includes(q[i][j])) include += 1;
      }

      if (include !== ans[i]) {
        isPossible = false;
        break;
      }
    }

    if (isPossible) result += 1;
  }

  return result;
}

console.log(
  solution(
    10,
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [3, 7, 8, 9, 10],
      [2, 5, 7, 9, 10],
      [3, 4, 5, 6, 7],
    ],
    [2, 3, 4, 3, 3]
  )
);
