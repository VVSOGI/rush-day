/**
 * DFS, 정렬, 이분탐색
 */

function solution(info, query) {
  const infoMap = {};

  function dfs(index, array, score) {
    const item = array.join("");

    if (infoMap[item]) {
      infoMap[item].push(score);
    } else {
      infoMap[item] = [score];
    }

    for (let i = index; i < array.length; i++) {
      const temp = [...array];
      temp[i] = "-";
      dfs(i + 1, temp, score);
    }
  }

  for (const item of info) {
    const splited = item.split(" ");
    const score = splited.pop();
    dfs(0, splited, Number(score));
  }

  for (const [key, value] of Object.entries(infoMap)) {
    infoMap[key] = value.sort((a, b) => a - b);
  }

  const result = [];

  for (const q of query) {
    const find = q.split(" and ");
    const [language, field, level] = find;
    const [food, score] = find.pop().split(" ");

    const scores = infoMap[language + field + level + food];

    if (!scores) {
      result.push(0);
      continue;
    }

    let left = 0;
    let right = scores.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (scores[mid] >= Number(score)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    result.push(scores.length - left);
  }

  return result;
}

console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
