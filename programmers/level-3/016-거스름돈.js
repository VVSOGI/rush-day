function solution(n, money) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;

  for (const coin of money) {
    for (let i = coin; i <= n; i++) {
      dp[i] = (dp[i] + dp[i - coin]) % 1_000_000_007;
    }
  }

  return dp[n];
}

console.log(solution(5, [1, 2, 5]));
