function solution(s) {
  if (s.length === 1) return 1;

  const result = {};
  let count = 1;

  while (count <= Math.floor(s.length / 2)) {
    let fixed = s.slice(0, count);
    let compress = "";
    let compressCount = 0;

    for (let i = 0; i < s.length + count; i += count) {
      const next = s.slice(i, i + count);
      if (fixed === next) {
        compressCount++;
        continue;
      }

      if (compressCount > 1) compress += compressCount;
      compress += fixed;
      compressCount = 1;
      fixed = next;
    }

    result[count] = compress;
    count++;
  }

  return Object.values(result)
    .map((item) => item.length)
    .sort((a, b) => a - b)[0];
}

console.log(solution("ababcdcdababcdcd"));
