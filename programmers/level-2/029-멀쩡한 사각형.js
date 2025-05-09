/**
 * 유클리드 호제법
 */

function solution(w, h) {
  function getGCD(a, b) {
    while (b) {
      [a, b] = [b, a % b];
    }

    return a;
  }

  const divisor = getGCD(w, h);
  const minW = w / divisor;
  const minH = h / divisor;

  return w * h - (minW + minH - 1) * divisor;
}

console.log(solution(7, 11));
