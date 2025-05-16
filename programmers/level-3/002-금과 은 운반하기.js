function solution(a, b, g, s, w, t) {
  let left = 1;
  let right = 10e14;

  function isPossible(time) {
    let goldWeight = 0;
    let silverWeight = 0;
    let mineralWeight = 0;

    for (let i = 0; i < g.length; i++) {
      const roundTrip = Math.floor(time / (t[i] * 2));
      const overTrip = time % (t[i] * 2) >= t[i] ? 1 : 0;
      const maxWeight = w[i] * (roundTrip + overTrip);

      goldWeight += Math.min(g[i], maxWeight);
      silverWeight += Math.min(s[i], maxWeight);
      mineralWeight += Math.min(g[i] + s[i], maxWeight);
    }

    return goldWeight >= a && silverWeight >= b && mineralWeight >= a + b;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isPossible(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

console.log(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]));
