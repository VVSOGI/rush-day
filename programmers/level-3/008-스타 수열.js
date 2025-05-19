function solution(a) {
  if (a.length < 2) return 0;

  const group = {};
  for (const num of a) {
    if (!group[num]) {
      group[num] = 1;
    } else {
      group[num] += 1;
    }
  }

  let found = 0;
  for (const [key, value] of Object.entries(group)) {
    const target = Number(key);
    let count = 0;

    if (found >= value * 2) continue;

    for (let i = 0; i < a.length - 1; i++) {
      if (a[i] !== a[i + 1] && (a[i] === target || a[i + 1] === target)) {
        count += 1;
        i += 1;
      }
    }

    found = Math.max(found, count * 2);
  }

  return found;
}

console.log(solution([5, 2, 3, 3, 5, 3]));
