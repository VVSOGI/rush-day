/**
 * 조합, 반복문 심화
 */

function solution(relation) {
  const attributes = Array(relation[0].length)
    .fill()
    .map((_, index) => index);

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

  const possibles = [];

  for (let i = 0; i < attributes.length; i++) {
    const combinations = getCombinations(attributes, i + 1);
    possibles.push(...combinations);
  }

  const uniqueness = [];

  for (const possible of possibles) {
    const set = new Set();
    for (const column of relation) {
      let select = "";
      for (const key of possible) {
        select += column[key];
      }
      set.add(select);
    }

    if (set.size === relation.length) {
      uniqueness.push([...possible]);
    }
  }

  const minimality = new Set();

  for (const unique of uniqueness) {
    let isMinimal = true;

    for (const key of minimality) {
      if (key.every((candidate) => unique.includes(candidate))) {
        isMinimal = false;
      }
    }

    if (isMinimal) {
      minimality.add(unique);
    }
  }

  return minimality.size;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);
