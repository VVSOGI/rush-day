function solution(n, works) {
  const sum = works.reduce((a, b) => a + b, 0);

  if (sum <= n) return 0;

  works.sort((a, b) => b - a);

  while (n) {
    const max = works[0];

    for (let i = 0; i < works.length; i++) {
      if (works[i] >= max) {
        works[i] -= 1;
        n -= 1;
      }

      if (n === 0) break;
    }
  }

  return works.map((work) => Math.pow(work, 2)).reduce((a, b) => a + b, 0);
}

console.log(solution(3, [8, 2]));
