function solution(n) {
  const number = [4, 1, 2];
  let result = "";

  while (n) {
    result = number[n % 3] + result;
    n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
  }

  return result;
}

console.log(solution(50_000_000));
