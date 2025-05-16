function solution(storey) {
  const floor = [
    0,
    ...String(storey)
      .split("")
      .map((item) => Number(item)),
  ];

  let min = Infinity;

  function dfs(index, current, move) {
    if (index === 0) {
      min = Math.min(min, move + floor[0]);
      return;
    }

    const rest = 10 - current[index];
    current[index - 1] += 1;
    dfs(index - 1, current, move + rest);
    current[index - 1] -= 1;

    dfs(index - 1, current, move + current[index]);
  }

  dfs(floor.length - 1, floor, 0);

  return min;
}

console.log(solution(55));
