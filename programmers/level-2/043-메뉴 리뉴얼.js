function solution(orders, course) {
  function getCombinations(arr, count) {
    if (count === 1) {
      return arr.map((item) => [item]);
    }

    const result = [];
    arr.forEach((item, index, array) => {
      const combinations = getCombinations(array.slice(index + 1), count - 1);
      const attached = combinations.map((combination) => [item, ...combination].sort().join(""));
      result.push(...attached);
    });

    return result;
  }

  const result = [];

  while (course.length) {
    const current = course.shift();
    const map = new Map();

    for (const order of orders) {
      const combination = getCombinations(order.split(""), current);
      for (const word of combination) {
        map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
      }
    }

    if (map.size === 0) continue;

    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    const [word, maxCount] = sorted[0];
    if (maxCount < 2) continue;
    result.push(word);

    for (let i = 1; i < sorted.length; i++) {
      const [nextWord, nextCount] = sorted[i];

      if (nextCount === maxCount) {
        result.push(nextWord);
      } else {
        break;
      }
    }
  }

  return result.sort();
}

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
