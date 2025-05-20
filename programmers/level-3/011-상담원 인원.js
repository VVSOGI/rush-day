/**
 * 정렬 부분에서 우선순위 큐 적용하면 성능 개선 가능
 */
function solution(k, n, reqs) {
  function getCombinations() {
    const result = [];
    const temp = Array(k).fill(0);
    function dfs(remaining, index) {
      if (index === k) {
        if (remaining === 0) {
          result.push([...temp]);
        }
        return;
      }

      for (let i = 1; i <= remaining - (k - index - 1); i++) {
        temp[index] = i;
        dfs(remaining - i, index + 1);
      }
    }

    dfs(n, 0);

    return result;
  }

  function calculateTime(combination) {
    let totalTime = 0;

    const counsels = {};

    for (let i = 0; i < combination.length; i++) {
      counsels[i + 1] = [];
    }

    for (const [start, time, category] of reqs) {
      if (combination[category - 1]) {
        combination[category - 1] -= 1;
        counsels[category].push(start + time);
      } else {
        counsels[category].sort((a, b) => a - b);
        const end = counsels[category].shift();
        if (end - start > 0) {
          totalTime += end - start;
          counsels[category].push(end + time);
        } else {
          counsels[category].push(start + time);
        }
      }
    }

    return totalTime;
  }

  let minimumTime = Infinity;
  const combinations = getCombinations();

  for (const combination of combinations) {
    const time = calculateTime(combination);
    minimumTime = Math.min(minimumTime, time);
  }

  return minimumTime;
}

console.log(
  solution(3, 5, [
    [10, 60, 1],
    [15, 100, 3],
    [20, 30, 1],
    [30, 50, 3],
    [50, 40, 1],
    [60, 30, 2],
    [65, 30, 1],
    [70, 100, 2],
  ])
);
