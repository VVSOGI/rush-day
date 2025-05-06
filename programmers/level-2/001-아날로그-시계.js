function solution(h1, m1, s1, h2, m2, s2) {
  let start = h1 * 3600 + m1 * 60 + s1;
  const end = h2 * 3600 + m2 * 60 + s2;

  let count = 0;

  if (start === 0 || start === 3600 * 12) {
    count += 1;
  }

  while (start < end) {
    const hourDegree = (start / 120) % 360;
    const minuteDegree = (start / 10) % 360;
    const secondDegree = (start * 6) % 360;

    const nextHourDegree = ((start + 1) / 120) % 360 || 360;
    const nextMinuteDegree = ((start + 1) / 10) % 360 || 360;
    const nextSecondDegree = ((start + 1) * 6) % 360 || 360;

    if (hourDegree > secondDegree && nextHourDegree <= nextSecondDegree) count += 1;
    if (minuteDegree > secondDegree && nextMinuteDegree <= nextSecondDegree) count += 1;
    if (secondDegree < hourDegree && nextHourDegree === nextMinuteDegree) count -= 1;

    start += 1;
  }

  return count;
}

console.log(solution(12, 0, 0, 12, 0, 30));
