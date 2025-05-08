function solution(plans) {
  const sorted = plans
    .map(([subject, time, rest]) => {
      const [hour, minute] = time.split(":").map((item) => Number(item));
      return [subject, hour * 60 + minute, Number(rest)];
    })
    .sort((a, b) => b[1] - a[1]);

  const stack = [];
  while (sorted.length) {
    const [subject, time, rest] = sorted.pop();

    stack.forEach((item) => {
      if (time < item[1]) item[1] += rest;
    });
    stack.push([subject, time + rest]);
  }

  const result = stack.sort((a, b) => a[1] - b[1]).map((item) => item[0]);
  return result;
}

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:00", "20"],
    ["math", "12:30", "40"],
  ])
);
