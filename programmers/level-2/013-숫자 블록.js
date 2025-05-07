/**
 * 구간 별 최대공약수 구하기 + 초과 숫자에 대한 예외 처리
 */

function solution(begin, end) {
  const result = [];

  function getGCD(number) {
    const stack = [];

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        if (number / i <= 10e6) {
          return number / i;
        }
        stack.push(i);
      }
    }

    return stack.length ? stack.pop() : 1;
  }

  for (let i = begin; i <= end; i++) {
    if (i === 1) {
      result.push(0);
      continue;
    }

    result.push(getGCD(i));
  }

  return result;
}

console.log(solution(1, 10));
