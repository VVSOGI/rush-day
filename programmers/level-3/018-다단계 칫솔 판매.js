function solution(enroll, referral, seller, amount) {
  const team = {};
  const money = {};

  for (let i = 0; i < enroll.length; i++) {
    money[enroll[i]] = 0;

    if (!team[enroll[i]]) {
      team[enroll[i]] = [referral[i]];
      continue;
    }

    team[enroll[i]].push(referral[i]);
  }

  function dfs(seller, cost) {
    if (seller === "-") return;

    const leader = team[seller][0];
    const leaderCost = Math.floor(cost / 10);
    const sellerCost = cost - leaderCost;

    money[seller] += sellerCost;

    if (leaderCost < 1) return;
    dfs(leader, leaderCost);
  }

  for (let i = 0; i < seller.length; i++) {
    dfs(seller[i], amount[i] * 100);
  }

  return Object.values(money);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
