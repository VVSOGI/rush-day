function solution(picks, minerals) {
  minerals = minerals.slice(0, picks.reduce((prev, curr) => prev + curr, 0) * 5);

  const rest = [];

  for (let i = 0; i < minerals.length; i += 5) {
    const tools = {
      diamond: 0,
      iron: 0,
      stone: 0,
    };

    for (const mineral of minerals.slice(i, i + 5)) {
      if (mineral === "diamond") {
        tools.diamond += 1;
        tools.iron += 5;
        tools.stone += 25;
      }

      if (mineral === "iron") {
        tools.diamond += 1;
        tools.iron += 1;
        tools.stone += 5;
      }

      if (mineral === "stone") {
        tools.diamond += 1;
        tools.iron += 1;
        tools.stone += 1;
      }
    }

    rest.push(tools);
  }

  rest.sort((a, b) => b.stone - a.stone);

  let index = 0;
  let total = 0;

  while (rest.length && index !== picks.length) {
    if (picks[index] <= 0) {
      index += 1;
      continue;
    }

    picks[index] -= 1;

    const currentMinerals = rest.shift();

    if (index === 0) total += currentMinerals.diamond;
    if (index === 1) total += currentMinerals.iron;
    if (index === 2) total += currentMinerals.stone;
  }

  return total;
}

console.log(
  solution(
    [0, 1, 1],
    ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]
  )
);
